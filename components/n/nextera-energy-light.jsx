import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-q4vd9uk.css';
import '../../css/i/ipro1v59i.css';

const viewBox = {"width":1705,"height":1413};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-q4vd9uk"/><path class="ipro1v59i"/>`,
		"fallback": "thesvg-color:nextera-energy-light",
	});
}

export default Component;
