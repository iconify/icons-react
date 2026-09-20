import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vw2zfxbpx.css';
import '../../css/q/qbxczgbum.css';
import '../../css/u/um8s5qwhf.css';
import '../../css/p/p0r0rf-gr.css';
import '../../css/c/cg5gvobvc.css';
import '../../css/z/znv-7ornv.css';
import '../../css/f/ftv8pkemf.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><g clip-path="url(#SVGMOoH9fWx)" clip-rule="evenodd" class="d2kvgvbvc"><path fill="url(#SVGZJcOtcVI)" class="vw2zfxbpx"/><path fill="url(#SVG4ULPacED)" class="qbxczgbum"/></g><defs><linearGradient id="SVGZJcOtcVI" x1="28.25" x2="151.612" y1="51.829" y2="236.026" gradientUnits="userSpaceOnUse"><stop class="um8s5qwhf"/><stop offset="1" class="p0r0rf-gr"/></linearGradient><linearGradient id="SVG4ULPacED" x1="110.321" x2="222.487" y1="93.248" y2="203.17" gradientUnits="userSpaceOnUse"><stop class="cg5gvobvc"/><stop offset="1" class="znv-7ornv"/></linearGradient><clipPath id="SVGMOoH9fWx"><path class="ftv8pkemf"/></clipPath></defs></g>`,
		"fallback": "skill-icons:r-light",
	});
}

export default Component;
