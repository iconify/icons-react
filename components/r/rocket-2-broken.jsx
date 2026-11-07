import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q31ynxbic.css';
import '../../css/k/kjoweacae.css';
import '../../css/u/uzaasqbnx.css';
import '../../css/s/s6txghz2w.css';
import '../../css/t/tszisubeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q31ynxbic"/><path class="kjoweacae"/><path class="uzaasqbnx"/><path class="s6txghz2w"/><path class="tszisubeg"/></g>`,
		"fallback": "solar:rocket-2-broken",
	});
}

export default Component;
