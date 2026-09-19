import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xb57b_8sc.css';
import '../../css/z/za6gjuszu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xb57b_8sc"/><path class="za6gjuszu"/></g>`,
		"fallback": "hugeicons:milk-oat",
	});
}

export default Component;
