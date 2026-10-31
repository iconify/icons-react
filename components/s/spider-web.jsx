import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/nau_nnb0n.css';
import '../../css/w/wwvfuwtui.css';
import '../../css/i/i2e2q7bsn.css';
import '../../css/w/wyy5occ0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGeVeFmbbt" x1="9" x2="15" y1="1.02" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGeVeFmbbt)" class="nau_nnb0n"/><path class="wm-shine wwvfuwtui"/><path class="i2e2q7bsn wm-shine"/><path class="wm-shine wyy5occ0g"/></g>`,
		"fallback": "withicons-utsav:spider-web",
	});
}

export default Component;
