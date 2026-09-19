import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t522kglro.css';
import '../../css/g/gnj64u4_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="t522kglro"/><path class="gnj64u4_i"/></g>`,
		"fallback": "icon-park-outline:trousers-bell-bottoms",
	});
}

export default Component;
