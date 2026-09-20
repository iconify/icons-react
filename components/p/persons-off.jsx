import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lmr58wvxp.css';
import '../../css/w/wux7ics0m.css';
import '../../css/t/tq030ebiu.css';
import '../../css/h/hgs_wxb7a.css';
import '../../css/v/vgv2cjbdg.css';
import '../../css/f/fov-jfmzz.css';
import '../../css/m/ms_pdjb5v.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="lmr58wvxp"/><path class="wux7ics0m"/><path class="tq030ebiu"/><path class="hgs_wxb7a"/><path class="vgv2cjbdg"/><path class="fov-jfmzz"/><path class="ms_pdjb5v"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:persons-off",
	});
}

export default Component;
