import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr0-7kx7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr0-7kx7v"/>`,
		"fallback": "iconaut:mail-check-solid",
	});
}

export default Component;
