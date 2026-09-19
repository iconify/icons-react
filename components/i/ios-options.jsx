import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts2-1lbsz.css';
import '../../css/n/nv41fibrk.css';
import '../../css/q/qz6wmnbwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts2-1lbsz"/><path class="nv41fibrk"/><path class="qz6wmnbwl"/>`,
		"fallback": "ion:ios-options",
	});
}

export default Component;
