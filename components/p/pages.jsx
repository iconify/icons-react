import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc10iubcv.css';
import '../../css/f/f6z-4gr0p.css';
import '../../css/x/xoxh_cz1d.css';
import '../../css/d/dwhvop1-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc10iubcv"/><path class="f6z-4gr0p"/><path class="xoxh_cz1d"/><path class="dwhvop1-h"/>`,
		"fallback": "fxemoji:pages",
	});
}

export default Component;
