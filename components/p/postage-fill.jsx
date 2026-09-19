import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smrjlo_7k.css';
import '../../css/i/i89nsvvof.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="smrjlo_7k"/><path class="i89nsvvof"/></g>`,
		"fallback": "bi:postage-fill",
	});
}

export default Component;
