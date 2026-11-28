import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmrq8iauz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmrq8iauz"/>`,
		"fallback": "iconaut:scan-line-solid",
	});
}

export default Component;
