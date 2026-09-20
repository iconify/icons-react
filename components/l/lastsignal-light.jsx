import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/d/d-llkv2cb.css';
import '../../css/x/xzxyr7bhc.css';
import '../../css/m/mfzt0ovgr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGYNr10dSc" x1="-656.362" x2="-630.763" y1="783.15" y2="757.55" gradientTransform="matrix(16 0 0 -20 10553 15663)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="d-llkv2cb"/></linearGradient><path fill="url(#SVGYNr10dSc)" class="xzxyr7bhc"/><linearGradient id="SVGeiD6DcAw" x1="-479.55" x2="-453.95" y1="653.95" y2="628.35" gradientTransform="matrix(4 0 0 -4 2123 2923)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="d-llkv2cb"/></linearGradient><circle fill="url(#SVGeiD6DcAw)" class="mfzt0ovgr"/>`,
		"fallback": "selfhst:lastsignal-light",
	});
}

export default Component;
