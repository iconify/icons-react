import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrkm51bar.css';
import '../../css/g/g_n8o-9fz.css';
import '../../css/z/zqkxn_b4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mrkm51bar"/><path class="g_n8o-9fz"/><path class="zqkxn_b4h"/></g>`,
		"fallback": "streamline-ultimate-color:rating-star",
	});
}

export default Component;
