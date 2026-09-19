import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l40iy_69f.css';
import '../../css/t/t9tvn7zfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="l40iy_69f"/><path class="t9tvn7zfp"/></g>`,
		"fallback": "hugeicons:medal-first-place",
	});
}

export default Component;
