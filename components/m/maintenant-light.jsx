import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/f/f-c80ro0i.css';
import '../../css/t/tb9i-5hiz.css';
import '../../css/d/d-llkv2cb.css';
import '../../css/x/x4e_kgztb.css';
import '../../css/m/mrdz7-w4l.css';
import '../../css/u/uv_y2zbgh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGmoqhjdpa" x1="-667.221" x2="-647.412" y1="767.444" y2="767.444" gradientTransform="matrix(20 0 0 -18 13363 14070)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".321" class="kckc1iwlf"/><stop offset=".54" class="f-c80ro0i"/><stop offset=".785" class="tb9i-5hiz"/><stop offset="1" class="d-llkv2cb"/></linearGradient><path fill="url(#SVGmoqhjdpa)" class="x4e_kgztb"/><path class="mrdz7-w4l"/><circle class="uv_y2zbgh"/>`,
		"fallback": "selfhst:maintenant-light",
	});
}

export default Component;
