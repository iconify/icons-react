import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulra56alq.css';
import '../../css/j/j9q-ggb4w.css';
import '../../css/o/oj2uj9r0d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ulra56alq"><path class="j9q-ggb4w"/><path class="oj2uj9r0d"/></g>`,
		"fallback": "catppuccin:lerna",
	});
}

export default Component;
