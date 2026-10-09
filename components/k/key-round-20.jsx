import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_31tneyb.css';
import '../../css/p/p1ariqbgg.css';
import '../../css/s/sk8e-4p4u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_31tneyb"/><path class="p1ariqbgg"/><path class="sk8e-4p4u"/>`,
		"fallback": "energy-icons:key-round-20",
	});
}

export default Component;
