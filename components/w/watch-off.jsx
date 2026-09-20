import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uvxotabki.css';
import '../../css/r/rfik5hbwh.css';
import '../../css/q/qxq1x0boq.css';
import '../../css/k/k7lfzkytj.css';
import '../../css/x/x6pvnl_nt.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uvxotabki"/><path clip-rule="evenodd" class="rfik5hbwh"/><path clip-rule="evenodd" class="qxq1x0boq"/><path clip-rule="evenodd" class="k7lfzkytj"/><path clip-rule="evenodd" class="x6pvnl_nt"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:watch-off",
	});
}

export default Component;
