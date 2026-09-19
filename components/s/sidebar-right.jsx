import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eau2_14yj.css';
import '../../css/u/uivlembey.css';
import '../../css/l/l75nf_bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eau2_14yj"/><path class="uivlembey"/><path class="l75nf_bgi"/></g>`,
		"fallback": "hugeicons:sidebar-right",
	});
}

export default Component;
