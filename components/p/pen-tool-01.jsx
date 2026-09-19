import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mhks76b_b.css';
import '../../css/u/ukl881ban.css';
import '../../css/r/rirn0xbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><circle class="mhks76b_b"/><path class="ukl881ban"/><path class="rirn0xbcx"/></g>`,
		"fallback": "hugeicons:pen-tool-01",
	});
}

export default Component;
