import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3o4v_bul.css';
import '../../css/r/rdhxn-bpo.css';
import '../../css/r/r-40nkb-i.css';
import '../../css/t/tpc3akbba.css';
import '../../css/o/omcq-ibvt.css';
import '../../css/g/g_u53lnib.css';
import '../../css/u/ug2-tibnv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3o4v_bul"/><path class="rdhxn-bpo"/><path class="r-40nkb-i"/><path class="tpc3akbba"/><path class="omcq-ibvt"/><path class="g_u53lnib"/><path class="ug2-tibnv"/>`,
		"fallback": "fxemoji:radio",
	});
}

export default Component;
