import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg3-byxey.css';
import '../../css/k/kgk8yebfr.css';
import '../../css/s/skjcx2zsr.css';
import '../../css/w/wf6mnjb6s.css';
import '../../css/y/ye46tsb4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGFCud5c4r" x1="256" x2="256" y1="-85.757" y2="528.88" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qg3-byxey"/><stop offset=".615" class="kgk8yebfr"/><stop offset="1" class="skjcx2zsr"/></linearGradient><path fill="url(#SVGFCud5c4r)" class="wf6mnjb6s"/><linearGradient id="SVGziuIEeNt" x1="521.12" x2="47.359" y1="-6.945" y2="466.819" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qg3-byxey"/><stop offset=".615" class="kgk8yebfr"/><stop offset="1" class="skjcx2zsr"/></linearGradient><path fill="url(#SVGziuIEeNt)" class="ye46tsb4i"/>`,
		"fallback": "selfhst:sidero-omni",
	});
}

export default Component;
