import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x2pordtzy.css';
import '../../css/s/s_7e9gbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x2pordtzy"/><path class="s_7e9gbgc"/></g>`,
		"fallback": "keyline-icons:user-check-sharp-fill",
	});
}

export default Component;
