import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gt_uexlze.css';
import '../../css/s/s5ai1ybgr.css';
import '../../css/u/u21_-q9mp.css';
import '../../css/y/yxq-kbq9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gt_uexlze"/><path class="s5ai1ybgr"/><path class="u21_-q9mp"/><path class="yxq-kbq9s"/></g>`,
		"fallback": "lsicon:more-outline",
	});
}

export default Component;
