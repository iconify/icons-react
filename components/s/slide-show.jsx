import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/av9hdnrpf.css';
import '../../css/y/yy9q5t54j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="av9hdnrpf"/><path class="yy9q5t54j"/></g>`,
		"fallback": "si-glyph:slide-show",
	});
}

export default Component;
