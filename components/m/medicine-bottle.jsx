import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/kp3f7cc4q.css';
import '../../css/q/qfux14b2n.css';
import '../../css/u/upsyw_e2b.css';
import '../../css/c/c7fejdbab.css';
import '../../css/g/gxzjcs0el.css';
import '../../css/v/vvb-ephrn.css';
import '../../css/p/podeassbx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="kp3f7cc4q"/><path class="qfux14b2n"/><path class="upsyw_e2b"/><path class="c7fejdbab"/><path class="gxzjcs0el"/><path class="vvb-ephrn"/><path class="podeassbx"/></g>`,
		"fallback": "icon-park:medicine-bottle",
	});
}

export default Component;
