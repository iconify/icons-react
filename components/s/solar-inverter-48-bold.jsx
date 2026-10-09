import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnjcr8b9t.css';
import '../../css/z/z6drtmbam.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnjcr8b9t"/><path class="z6drtmbam"/>`,
		"fallback": "energy-icons:solar-inverter-48-bold",
	});
}

export default Component;
