import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eaj_p_cdz.css';
import '../../css/n/ndixsabmg.css';
import '../../css/c/ccht0bp_w.css';
import '../../css/l/lw875-p4x.css';
import '../../css/p/ps9k3gbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eaj_p_cdz wm-k"/><path class="ndixsabmg wm-a"/><path class="ccht0bp_w wm-shadow"/><path class="lw875-p4x wm-k"/><path class="ps9k3gbsc wm-a"/></g>`,
		"fallback": "withicons:upload-engrave",
	});
}

export default Component;
