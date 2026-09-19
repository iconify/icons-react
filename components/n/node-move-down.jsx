import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nf8asibfv.css';
import '../../css/v/v_u7lbc8p.css';
import '../../css/i/iqbu_qwxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nf8asibfv"/><path class="v_u7lbc8p"/><path class="iqbu_qwxd"/></g>`,
		"fallback": "hugeicons:node-move-down",
	});
}

export default Component;
