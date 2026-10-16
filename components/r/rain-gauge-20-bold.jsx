import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ala7sfbdm.css';
import '../../css/t/tl7j9h2ao.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ala7sfbdm"/><path class="tl7j9h2ao"/>`,
		"fallback": "energy-icons:rain-gauge-20-bold",
	});
}

export default Component;
