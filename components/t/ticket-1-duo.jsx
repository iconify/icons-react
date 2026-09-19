import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x73f4fbma.css';
import '../../css/k/k8yewlbuo.css';
import '../../css/k/k6d8plbpn.css';
import '../../css/c/cnlj5wxrz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x73f4fbma"/><path class="k8yewlbuo"/><path class="k6d8plbpn"/><path class="cnlj5wxrz"/></g>`,
		"fallback": "glyphs:ticket-1-duo",
	});
}

export default Component;
