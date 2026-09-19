import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k0juz0gib.css';
import '../../css/d/d4bpu0bvk.css';
import '../../css/j/jrp9cab6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k0juz0gib"/><path class="d4bpu0bvk"/><path class="jrp9cab6c"/></g>`,
		"fallback": "hugeicons:location-user-03",
	});
}

export default Component;
