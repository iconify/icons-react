import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo0-vdo8d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo0-vdo8d"/>`,
		"fallback": "carbon:snow-scattered-night",
	});
}

export default Component;
