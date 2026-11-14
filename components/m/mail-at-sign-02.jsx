import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svojxubjk.css';
import '../../css/t/tyn-1rwci.css';
import '../../css/v/vt_vpgbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="svojxubjk"/><path class="tyn-1rwci"/><path class="vt_vpgbfz"/></g>`,
		"fallback": "hugeicons:mail-at-sign-02",
	});
}

export default Component;
