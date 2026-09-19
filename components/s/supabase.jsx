import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmjwiuq4d.css';
import '../../css/d/dkd-0gk2d.css';
import '../../css/k/k05n1gbkm.css';
import '../../css/c/c8xtnnbbq.css';
import '../../css/s/s18hthbrl.css';
import '../../css/h/h09_qkbbk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG7pxEXcwp" x1="53.974" x2="94.163" y1="54.974" y2="71.829" gradientTransform="translate(29.387 60.096)scale(1.1436)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vmjwiuq4d"/><stop offset="1" class="dkd-0gk2d"/></linearGradient><linearGradient id="SVGwe4qUjnW" x1="36.156" x2="54.484" y1="30.578" y2="65.081" gradientTransform="translate(29.387 60.096)scale(1.1436)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="k05n1gbkm"/></linearGradient></defs><path fill="url(#SVG7pxEXcwp)" transform="translate(-27.722 -60.338)" class="c8xtnnbbq"/><path fill="url(#SVGwe4qUjnW)" transform="translate(-27.722 -60.338)" class="s18hthbrl"/><path class="h09_qkbbk"/>`,
		"fallback": "devicon:supabase",
	});
}

export default Component;
