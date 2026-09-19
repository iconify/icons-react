import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nrttuebta.css';
import '../../css/x/xu--epbdn.css';
import '../../css/p/pbxt5obiw.css';
import '../../css/t/t-cn-6bbb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nrttuebta"/><path class="xu--epbdn"/><rect transform="matrix(1 0 0 -1 37 64)" class="pbxt5obiw"/><rect transform="matrix(1 0 0 -1 37 40)" class="t-cn-6bbb"/></g>`,
		"fallback": "glyphs-poly:sort-size-up-1",
	});
}

export default Component;
