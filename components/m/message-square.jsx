import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/s/s_4dzwdzs.css';
import '../../css/h/h0mgfgf1m.css';
import '../../css/r/r7fym7t6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGzaDN3cfK" x1="0" x2="0" y1="-40.6" y2="79.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGOA0hBfOy" x1="2.1" x2="21.9" y1="2.6" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGzaDN3cfK)" class="s_4dzwdzs wm-shadow"/><path class="h0mgfgf1m wm-k"/><path fill="url(#SVGOA0hBfOy)" class="r7fym7t6o wm-k"/></g>`,
		"fallback": "withicons-suite:message-square",
	});
}

export default Component;
