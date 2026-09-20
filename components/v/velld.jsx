import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roc75q_vq.css';
import '../../css/t/t1zyap3om.css';
import '../../css/e/e6a0x5b1k.css';
import '../../css/u/uirl5bcnd.css';
import '../../css/u/u-onlu_fk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGNCDByoAW" x1="-12.788" x2="524.788" y1="100.815" y2="411.185" gradientUnits="userSpaceOnUse"><stop offset="0" class="roc75q_vq"/><stop offset=".202" class="t1zyap3om"/><stop offset=".563" class="e6a0x5b1k"/><stop offset="1" class="uirl5bcnd"/></linearGradient><path fill="url(#SVGNCDByoAW)" class="u-onlu_fk"/>`,
		"fallback": "selfhst:velld",
	});
}

export default Component;
