import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p9wn_bc_q.css';
import '../../css/p/pptd7ccky.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="p9wn_bc_q"/><path class="pptd7ccky"/></g>`,
		"fallback": "icon-park-outline:lollipop",
	});
}

export default Component;
