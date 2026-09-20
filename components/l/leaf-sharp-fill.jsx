import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/iztvuabne.css';
import '../../css/v/vf7p9lbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="iztvuabne"/><path class="vf7p9lbcx"/></g>`,
		"fallback": "keyline-icons:leaf-sharp-fill",
	});
}

export default Component;
