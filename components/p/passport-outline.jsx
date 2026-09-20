import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xwcz-viev.css';
import '../../css/v/vr_ofdcez.css';
import '../../css/e/eudukmbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xwcz-viev"/><path class="vr_ofdcez"/><path clip-rule="evenodd" class="eudukmbaz"/></g>`,
		"fallback": "solar:passport-outline",
	});
}

export default Component;
