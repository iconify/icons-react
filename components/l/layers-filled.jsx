import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tm-thgbjd.css';
import '../../css/z/zh2nf-bwc.css';
import '../../css/k/kvez5x9jo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tm-thgbjd"/><path class="zh2nf-bwc"/><path class="kvez5x9jo"/></g>`,
		"fallback": "ix:layers-filled",
	});
}

export default Component;
