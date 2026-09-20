import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/rna_0_b1f.css';
import '../../css/q/q6dvizbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="rna_0_b1f"/><path class="q6dvizbwt"/></g>`,
		"fallback": "reicon:watch5",
	});
}

export default Component;
