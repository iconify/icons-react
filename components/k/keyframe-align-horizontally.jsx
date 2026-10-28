import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mafqy4b4m.css';
import '../../css/c/cad3ynb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mafqy4b4m"/><path class="cad3ynb9r"/></g>`,
		"fallback": "andrsrxn:keyframe-align-horizontally",
	});
}

export default Component;
