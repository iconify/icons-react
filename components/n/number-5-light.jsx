import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehuol1ywa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehuol1ywa"/>`,
		"fallback": "iconamoon:number-5-light",
	});
}

export default Component;
