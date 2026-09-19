import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eau2_14yj.css';
import '../../css/a/a0klxzp1p.css';
import '../../css/v/vh1tt6b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eau2_14yj"/><path class="a0klxzp1p"/><path class="vh1tt6b-t"/></g>`,
		"fallback": "hugeicons:sidebar-top",
	});
}

export default Component;
