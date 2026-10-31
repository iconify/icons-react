import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/b107chb3e.css';
import '../../css/u/uqpmvwbxl.css';
import '../../css/l/l5-650bny.css';
import '../../css/j/jivp2hp_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="b107chb3e"/><path class="uqpmvwbxl wm-shine"/><path class="l5-650bny wm-k"/><path class="jivp2hp_j wm-a"/></g>`,
		"fallback": "withicons-kawaii:utensils",
	});
}

export default Component;
