import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcy5x_18o.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcy5x_18o"/>`,
		"fallback": "fa6-solid:q",
	});
}

export default Component;
