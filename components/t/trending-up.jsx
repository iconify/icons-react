import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pe1a9hbbo.css';
import '../../css/h/hxlui3l7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pe1a9hbbo"/><path class="hxlui3l7w"/></g>`,
		"fallback": "icon-park-outline:trending-up",
	});
}

export default Component;
