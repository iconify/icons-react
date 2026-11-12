import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xai91pbid.css';
import '../../css/f/fef2p4b2l.css';
import '../../css/c/c0xyygbvy.css';
import '../../css/a/a_we93bsj.css';
import '../../css/a/af6bnpb6p.css';
import '../../css/m/menuqdquy.css';
import '../../css/i/igveuaclx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xai91pbid"/><radialGradient id="SVGA9gLSblm" cx="-54.098" cy="658.534" r=".163" gradientTransform="matrix(181.3681 0 0 -181.3681 10008.34 119904.85)" gradientUnits="userSpaceOnUse"><stop offset="0" class="fef2p4b2l"/><stop offset="1" class="c0xyygbvy"/></radialGradient><path fill="url(#SVGA9gLSblm)" class="a_we93bsj"/><radialGradient id="SVGUcDeJdHp" cx="-55.324" cy="658.535" r=".163" gradientTransform="matrix(181.35831 0 0 -181.3582 10340.35 119898.39)" gradientUnits="userSpaceOnUse"><stop offset="0" class="fef2p4b2l"/><stop offset="1" class="c0xyygbvy"/></radialGradient><path fill="url(#SVGUcDeJdHp)" class="af6bnpb6p"/><path class="menuqdquy"/><path class="igveuaclx"/>`,
		"fallback": "selfhst:memcached-dark",
	});
}

export default Component;
