import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffq4sab7p.css';
import '../../css/b/b14f04b4m.css';
import '../../css/r/ryv0tcb0y.css';
import '../../css/a/ab6ezab-t.css';
import '../../css/q/qjw6x2fgh.css';
import '../../css/z/zx_6iob7o.css';
import '../../css/y/y_mvh839a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGKNqwperX" x1="-11.685" x2="70.392" y1="468.541" y2="610.702" gradientTransform="matrix(4 0 0 4 153.638 -1669.933)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ffq4sab7p"/><stop offset="1" class="b14f04b4m"/></linearGradient><path fill="url(#SVGKNqwperX)" class="ryv0tcb0y"/><path class="ab6ezab-t"/><linearGradient id="SVGIvNr4cxI" x1="25.602" x2="25.602" y1="520.254" y2="563.333" gradientTransform="matrix(4 0 0 4 153.638 -1669.933)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qjw6x2fgh"/><stop offset="1" class="zx_6iob7o"/></linearGradient><path fill="url(#SVGIvNr4cxI)" class="y_mvh839a"/>`,
		"fallback": "selfhst:mbin",
	});
}

export default Component;
