import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xdfr29bzc.css';
import '../../css/c/c12_yhz0x.css';
import '../../css/q/qyd-9_-em.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xdfr29bzc"/><rect class="c12_yhz0x"/><path class="qyd-9_-em"/></g>`,
		"fallback": "icon-park-outline:subtract-selection-one",
	});
}

export default Component;
