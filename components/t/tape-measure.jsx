import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yht5chb_v.css';
import '../../css/d/d9dqksb9z.css';
import '../../css/o/oe5drjvzo.css';
import '../../css/h/hxq6r5mzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yht5chb_v"/><path class="d9dqksb9z"/><path class="oe5drjvzo"/><path class="hxq6r5mzm"/></g>`,
		"fallback": "hugeicons:tape-measure",
	});
}

export default Component;
