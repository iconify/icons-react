import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acvp9rbcm.css';
import '../../css/e/ev1t4gbmi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acvp9rbcm"/><path class="ev1t4gbmi"/>`,
		"fallback": "energy-icons:water-bottle-48",
	});
}

export default Component;
