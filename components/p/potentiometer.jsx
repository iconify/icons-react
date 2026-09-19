import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/psu35dzdo.css';
import '../../css/f/flzcbdc4z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><ellipse class="psu35dzdo"/><path class="flzcbdc4z"/></g>`,
		"fallback": "icon-park-solid:potentiometer",
	});
}

export default Component;
