import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9npv1b0r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9npv1b0r"/>`,
		"fallback": "dinkie-icons:line-height-small",
	});
}

export default Component;
