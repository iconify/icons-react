import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye4d9drmo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye4d9drmo"/>`,
		"fallback": "vaadin:shift-arrow",
	});
}

export default Component;
