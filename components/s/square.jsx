import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi-am0b6d.css';
import '../../css/y/ypbw_ttlv.css';
import '../../css/o/osu31q_gz.css';
import '../../css/a/ad2_zeb8h.css';
import '../../css/r/rg21m8bhx.css';
import '../../css/f/fxxy70i-n.css';
import '../../css/l/lw4nrhytu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi-am0b6d wm-shadow"/><path class="ypbw_ttlv"/><path class="osu31q_gz"/><path class="ad2_zeb8h"/><path class="rg21m8bhx"/><path class="fxxy70i-n wm-shine"/><path class="lw4nrhytu"/>`,
		"fallback": "withicons-plush:square",
	});
}

export default Component;
