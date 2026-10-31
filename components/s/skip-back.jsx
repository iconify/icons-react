import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/o/omaimsblf.css';
import '../../css/z/z201enbxc.css';
import '../../css/p/ptab0bb5k.css';
import '../../css/a/arn240blj.css';
import '../../css/k/k7up-rb2u.css';
import '../../css/c/ci17m_bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFhrLMdaP" x1="10" x2="14" y1="4.01" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="omaimsblf wm-k"/><path class="wm-a z201enbxc"/><path class="ptab0bb5k wm-deco"/><path fill="url(#SVGFhrLMdaP)" class="arn240blj wm-k"/><path class="k7up-rb2u wm-a"/><path class="ci17m_bic wm-shadow"/></g>`,
		"fallback": "withicons-valentine:skip-back",
	});
}

export default Component;
