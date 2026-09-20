import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oy_qfibdp.css';
import '../../css/s/s1f4hpnzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="oy_qfibdp"/><path class="s1f4hpnzw"/></g>`,
		"fallback": "keyline-icons:tag-sharp",
	});
}

export default Component;
