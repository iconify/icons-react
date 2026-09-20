import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogo83fbiz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogo83fbiz"/>`,
		"fallback": "oui:partial",
	});
}

export default Component;
