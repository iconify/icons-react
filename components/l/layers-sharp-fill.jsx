import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/a2--eibkb.css';
import '../../css/n/nd8jlsxei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="a2--eibkb"/><path class="nd8jlsxei"/></g>`,
		"fallback": "keyline-icons:layers-sharp-fill",
	});
}

export default Component;
