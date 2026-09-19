import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn6mf84ka.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn6mf84ka"/>`,
		"fallback": "garden:pin-stroke-12",
	});
}

export default Component;
