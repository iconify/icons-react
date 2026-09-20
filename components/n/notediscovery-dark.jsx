import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx32gdm7x.css';
import '../../css/k/kio5svbfy.css';
import '../../css/v/vk19fvz-k.css';
import '../../css/f/f62bxxbfn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGqPxgb4DF" x1="18.297" x2="493.703" y1="18.297" y2="493.703" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="qx32gdm7x"/></linearGradient><path fill="url(#SVGqPxgb4DF)" class="kio5svbfy"/><path class="vk19fvz-k"/><circle class="f62bxxbfn"/>`,
		"fallback": "selfhst:notediscovery-dark",
	});
}

export default Component;
