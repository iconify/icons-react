import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_gp7lgqe.css';
import '../../css/s/sav6x4bmf.css';
import '../../css/w/wgt8zfbtg.css';
import '../../css/u/uu1iz8zqe.css';
import '../../css/c/cscv_-p2h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGJ8Pkhdiw" x1="128" x2="128" y1="0" y2="256" gradientTransform="translate(0 50.95)scale(.10032)" gradientUnits="userSpaceOnUse"><stop offset="0" class="g_gp7lgqe"/><stop offset="1" class="sav6x4bmf"/></linearGradient></defs><path class="wgt8zfbtg"/><path fill="url(#SVGJ8Pkhdiw)" class="uu1iz8zqe"/><path class="cscv_-p2h"/>`,
		"fallback": "devicon:trello-wordmark",
	});
}

export default Component;
