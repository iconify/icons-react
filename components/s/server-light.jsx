import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjoql5gzl.css';
import '../../css/i/izq59sb8f.css';
import '../../css/p/pqt-l0b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjoql5gzl"/><rect class="izq59sb8f"/><path class="pqt-l0b-z"/></g>`,
		"fallback": "lets-icons:server-light",
	});
}

export default Component;
