import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dujczsbku.css';
import '../../css/w/w4csg3qim.css';
import '../../css/k/keux18blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dujczsbku"/><path class="w4csg3qim"/><path class="keux18blx"/></g>`,
		"fallback": "hugeicons:transition-bottom",
	});
}

export default Component;
