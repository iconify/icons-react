import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqs_i4b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqs_i4b8u"/>`,
		"fallback": "iconaut:markdown-solid",
	});
}

export default Component;
