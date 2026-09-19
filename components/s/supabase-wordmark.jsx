import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt7wzrb3q.css';
import '../../css/c/cclr_dc5f.css';
import '../../css/m/mjayaf0jx.css';
import '../../css/v/vkck8dbab.css';
import '../../css/v/vmjwiuq4d.css';
import '../../css/d/dkd-0gk2d.css';
import '../../css/k/k05n1gbkm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt7wzrb3q"/><path fill="url(#SVGj4n2OeNY)" class="cclr_dc5f"/><path fill="url(#SVG0HsY8dSX)" class="mjayaf0jx"/><path class="vkck8dbab"/><defs><linearGradient id="SVGj4n2OeNY" x1="53.974" x2="94.163" y1="54.974" y2="71.829" gradientTransform="translate(.02 51.611)scale(.22053)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vmjwiuq4d"/><stop offset="1" class="dkd-0gk2d"/></linearGradient><linearGradient id="SVG0HsY8dSX" x1="36.156" x2="54.484" y1="30.578" y2="65.081" gradientTransform="translate(.02 51.611)scale(.22053)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="k05n1gbkm"/></linearGradient></defs>`,
		"fallback": "devicon:supabase-wordmark",
	});
}

export default Component;
