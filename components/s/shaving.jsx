import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/x3cm0_bro.css';
import '../../css/u/ubuh6kbkg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="x3cm0_bro"/><path class="ubuh6kbkg"/></g>`,
		"fallback": "icon-park-outline:shaving",
	});
}

export default Component;
