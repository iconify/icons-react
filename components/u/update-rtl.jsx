import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8y_vccxb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8y_vccxb"/>`,
		"fallback": "ooui:update-rtl",
	});
}

export default Component;
