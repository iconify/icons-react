import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9b73nb6i.css';
import '../../css/c/c__qdgb1d.css';
import '../../css/k/k-l-zsmjx.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/g/gvgd7ibyf.css';
import '../../css/n/nmjzi7gvr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9b73nb6i"/><path class="c__qdgb1d"/><path class="k-l-zsmjx"/><g class="ij2x_72vy"><path class="gvgd7ibyf"/><path class="nmjzi7gvr"/></g>`,
		"fallback": "openmoji:level-slider",
	});
}

export default Component;
