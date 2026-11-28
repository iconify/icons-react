import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuzz96_1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuzz96_1i"/>`,
		"fallback": "iconaut:power-solid",
	});
}

export default Component;
