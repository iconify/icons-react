import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uq1ygrbol.css';
import '../../css/w/wz8kxabmh.css';
import '../../css/w/wwgmjs_iq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uq1ygrbol"/><path class="wz8kxabmh"/><path class="wwgmjs_iq"/></g>`,
		"fallback": "streamline-ultimate-color:medical-hospital",
	});
}

export default Component;
