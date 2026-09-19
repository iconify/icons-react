import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/u8u9ptb8o.css';
import '../../css/h/hyvdpf2ck.css';
import '../../css/q/qzautb20j.css';
import '../../css/u/u01-ywn2b.css';
import '../../css/y/y6_qflbqc.css';
import '../../css/d/deiktlz1f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="u8u9ptb8o"/><path class="hyvdpf2ck"/><path class="qzautb20j"/><path class="u01-ywn2b"/><circle class="y6_qflbqc"/><circle class="deiktlz1f"/></g>`,
		"fallback": "icon-park:medal-one",
	});
}

export default Component;
