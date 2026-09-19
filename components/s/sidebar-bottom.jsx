import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eau2_14yj.css';
import '../../css/h/hvkfyv_fw.css';
import '../../css/i/i5uwpy6kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eau2_14yj"/><path class="hvkfyv_fw"/><path class="i5uwpy6kl"/></g>`,
		"fallback": "hugeicons:sidebar-bottom",
	});
}

export default Component;
