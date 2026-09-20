import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cewd985tv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cewd985tv"/>`,
		"fallback": "roentgen:power-tower-delta",
	});
}

export default Component;
