import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibm1vrbdc.css';
import '../../css/k/k_93etbwr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibm1vrbdc"/><path class="k_93etbwr"/>`,
		"fallback": "energy-icons:plunger-20-bold",
	});
}

export default Component;
