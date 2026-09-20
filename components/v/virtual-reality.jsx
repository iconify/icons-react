import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9fcnnbjt.css';
import '../../css/q/qy7h5ub6t.css';
import '../../css/b/bksoibsiv.css';
import '../../css/p/pcoq81bdi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j9fcnnbjt"/><path class="qy7h5ub6t"/><path class="bksoibsiv"/><path class="pcoq81bdi"/></g>`,
		"fallback": "streamline-color:virtual-reality",
	});
}

export default Component;
