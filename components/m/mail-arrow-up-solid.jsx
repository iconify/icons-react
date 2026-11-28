import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2dzzyjot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2dzzyjot"/>`,
		"fallback": "iconaut:mail-arrow-up-solid",
	});
}

export default Component;
