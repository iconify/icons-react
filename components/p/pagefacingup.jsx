import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbg_emk3p.css';
import '../../css/q/qrb1vdrhq.css';
import '../../css/w/whu0plbbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbg_emk3p"/><path class="qrb1vdrhq"/><path class="whu0plbbo"/>`,
		"fallback": "fxemoji:pagefacingup",
	});
}

export default Component;
