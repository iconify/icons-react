import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuil0dbas.css';
import '../../css/d/dzyouclrc.css';
import '../../css/c/cum2y9o2v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuil0dbas"/><path class="dzyouclrc"/><path class="cum2y9o2v"/>`,
		"fallback": "energy-icons:not-gate-20-bold",
	});
}

export default Component;
