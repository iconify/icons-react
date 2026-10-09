import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzjyr_m9i.css';
import '../../css/e/ej_mrn1yb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzjyr_m9i"/><path class="ej_mrn1yb"/>`,
		"fallback": "energy-icons:power-20-bold",
	});
}

export default Component;
