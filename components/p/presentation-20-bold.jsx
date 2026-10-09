import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_j6v7gna.css';
import '../../css/c/cbr70bcko.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_j6v7gna"/><path class="cbr70bcko"/>`,
		"fallback": "energy-icons:presentation-20-bold",
	});
}

export default Component;
