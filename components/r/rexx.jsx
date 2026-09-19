import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixp4m2azo.css';
import '../../css/b/b8v3xfb5e.css';
import '../../css/i/im04-0bkz.css';
import '../../css/h/hqg3ctbtg.css';
import '../../css/w/wlecmmovf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGV7QPNdxd" x1="4.154" x2="4.154" y1="108.707" y2="23.639" gradientTransform="translate(-4.294 -1.099)scale(1.03354)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ixp4m2azo"/><stop offset=".5" class="b8v3xfb5e"/><stop offset="1" class="im04-0bkz"/></linearGradient></defs><path fill="url(#SVGV7QPNdxd)" class="hqg3ctbtg"/><path class="wlecmmovf"/>`,
		"fallback": "devicon:rexx",
	});
}

export default Component;
