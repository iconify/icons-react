import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/h/h67uk--wl.css';
import '../../css/x/xt1gtubwd.css';
import '../../css/s/s3qjazrza.css';
import '../../css/x/xo_esmbuw.css';
import '../../css/e/ehbmnzbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGnhRG0czJ" x1="1.6" x2="14.4" y1="3.6" y2="15.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGznVHVdUw" x1="7.4" x2="21.6" y1="8.4" y2="20.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="h67uk--wl wm-a"/><path fill="url(#SVGnhRG0czJ)" class="wm-a xt1gtubwd"/><path class="s3qjazrza wm-k"/><path class="wm-k xo_esmbuw"/><path fill="url(#SVGznVHVdUw)" class="ehbmnzbyi wm-k"/></g>`,
		"fallback": "withicons-suite:reply-all",
	});
}

export default Component;
