import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/midqvbcgl.css';
import '../../css/r/rmj10z9cb.css';
import '../../css/r/r47dkf1hc.css';
import '../../css/z/zd46sgbja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="midqvbcgl"/><path class="rmj10z9cb"/><path class="r47dkf1hc"/><path class="zd46sgbja"/></g>`,
		"fallback": "icon-park-solid:retro-bag",
	});
}

export default Component;
