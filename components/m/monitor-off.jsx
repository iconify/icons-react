import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ckbm37bkg.css';
import '../../css/q/q-evdcban.css';
import '../../css/v/vxpz4pvui.css';
import '../../css/c/cdsox1w9v.css';
import '../../css/x/x9mvs1_as.css';
import '../../css/v/vqyephr6g.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ckbm37bkg"/><path clip-rule="evenodd" class="q-evdcban"/><path class="vxpz4pvui"/><path clip-rule="evenodd" class="cdsox1w9v"/><path class="x9mvs1_as"/><path clip-rule="evenodd" class="vqyephr6g"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:monitor-off",
	});
}

export default Component;
