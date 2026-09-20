import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb6pms4ia.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb6pms4ia"/>`,
		"fallback": "ooui:puzzle-rtl",
	});
}

export default Component;
