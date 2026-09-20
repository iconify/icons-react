import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/i9fm37bpp.css';
import '../../css/y/y1zo2q6hp.css';
import '../../css/m/m643fwlbl.css';
import '../../css/t/trpnrd92m.css';
import '../../css/w/w_0d5gb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="i9fm37bpp"/><path class="y1zo2q6hp"/><path class="m643fwlbl"/><path class="trpnrd92m"/><path class="w_0d5gb2d"/></g>`,
		"fallback": "streamline-sharp-color:mail-loading",
	});
}

export default Component;
