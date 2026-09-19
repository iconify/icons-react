import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vslgelbgz.css';
import '../../css/t/to5t-2sbk.css';
import '../../css/z/zt1astemn.css';
import '../../css/o/olgmv1buy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vslgelbgz"/><path class="to5t-2sbk"/><path class="zt1astemn"/><path class="olgmv1buy"/></g>`,
		"fallback": "fluent-emoji-flat:pouring-liquid",
	});
}

export default Component;
