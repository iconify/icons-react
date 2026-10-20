import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r20d5fbva.css';
import '../../css/o/o08gbrx6h.css';
import '../../css/c/cvogzw0ol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r20d5fbva"/><path class="o08gbrx6h"/><path class="cvogzw0ol"/>`,
		"fallback": "energy-icons:joystick-48-bold",
	});
}

export default Component;
