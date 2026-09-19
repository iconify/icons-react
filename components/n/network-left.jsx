import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i1lh78f0p.css';
import '../../css/l/ldvrnsb6k.css';
import '../../css/p/paa1-5tox.css';
import '../../css/m/m3dcrbb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect transform="rotate(-90 2 21)" class="i1lh78f0p"/><rect transform="rotate(-90 17 15.5)" class="ldvrnsb6k"/><rect transform="rotate(-90 2 10)" class="paa1-5tox"/><path class="m3dcrbb4i"/></g>`,
		"fallback": "iconoir:network-left",
	});
}

export default Component;
