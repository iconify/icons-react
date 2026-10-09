import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/d/dzms03blg.css';
import '../../css/q/q3tk9nyeg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="dzms03blg"/><path class="q3tk9nyeg"/>`,
		"fallback": "energy-icons:smart-thermostat-20",
	});
}

export default Component;
