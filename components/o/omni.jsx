import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lzv3s0blr.css';
import '../../css/t/tbin5_b6g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="lzv3s0blr"/><path class="tbin5_b6g"/></g>`,
		"fallback": "cryptocurrency-color:omni",
	});
}

export default Component;
