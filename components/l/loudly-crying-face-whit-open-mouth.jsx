import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/b/bzcjbiteh.css';
import '../../css/p/p-94simbr.css';
import '../../css/q/qh46r7bte.css';
import '../../css/x/xjc_jz8le.css';
import '../../css/f/f4_opsbub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="bzcjbiteh"/><path class="p-94simbr"/><path class="qh46r7bte"/><path class="xjc_jz8le"/><path class="f4_opsbub"/></g>`,
		"fallback": "icon-park:loudly-crying-face-whit-open-mouth",
	});
}

export default Component;
