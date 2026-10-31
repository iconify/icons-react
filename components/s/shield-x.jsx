import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/h/hd7s3u2vj.css';
import '../../css/m/m40x8q56t.css';
import '../../css/g/govolob8k.css';
import '../../css/p/pj7j3qf8v.css';
import '../../css/h/hck6jrqme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFXzhPeEy" x1="10" x2="14" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="hd7s3u2vj wm-k"/><path class="m40x8q56t wm-deco"/><path class="govolob8k wm-k"/><path fill="url(#SVGFXzhPeEy)" class="pj7j3qf8v wm-k"/><path class="hck6jrqme wm-shadow"/></g>`,
		"fallback": "withicons-valentine:shield-x",
	});
}

export default Component;
