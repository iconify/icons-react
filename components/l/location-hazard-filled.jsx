import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o88u_xb9d.css';
import '../../css/r/r7xl8ggtz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o88u_xb9d"/><path class="r7xl8ggtz"/>`,
		"fallback": "carbon:location-hazard-filled",
	});
}

export default Component;
