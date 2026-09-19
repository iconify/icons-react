import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq40pabsu.css';
import '../../css/r/r309-c0lg.css';
import '../../css/e/er4xdd6kj.css';
import '../../css/g/guxtyxb2y.css';
import '../../css/v/vf8oukbgm.css';
import '../../css/w/w9rnoibmy.css';
import '../../css/m/mwo7e2b8w.css';
import '../../css/g/go6gv7ejv.css';
import '../../css/v/vxpl28bkd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq40pabsu"/><linearGradient id="SVGeswNDb6j" x1="295.835" x2="295.835" y1="124.728" y2="123.889" gradientTransform="matrix(112 0 0 -112 -33069.5 13971)" gradientUnits="userSpaceOnUse"><stop offset="0" class="r309-c0lg"/><stop offset="1" class="er4xdd6kj"/></linearGradient><circle fill="url(#SVGeswNDb6j)" class="guxtyxb2y"/><path class="vf8oukbgm"/><path class="w9rnoibmy"/><path class="mwo7e2b8w"/><path class="go6gv7ejv"/><path class="vxpl28bkd"/>`,
		"fallback": "devicon:safari-wordmark",
	});
}

export default Component;
