import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zeus6cf2k.css';
import '../../css/h/hj_3dtbcr.css';
import '../../css/l/lpflbekmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="zeus6cf2k"/><path class="hj_3dtbcr"/><path class="lpflbekmt"/></g>`,
		"fallback": "streamline-cyber:wallet-cash-1",
	});
}

export default Component;
