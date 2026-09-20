import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0y23_1nc.css';
import '../../css/f/ff3sy810t.css';
import '../../css/r/rvy91nq9z.css';
import '../../css/p/pbmit9bro.css';
import '../../css/b/bnddd8spr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b0y23_1nc"/><path class="ff3sy810t"/><path class="rvy91nq9z"/><path class="pbmit9bro"/><path class="bnddd8spr"/></g>`,
		"fallback": "streamline-ultimate-color:volleyball-ball",
	});
}

export default Component;
