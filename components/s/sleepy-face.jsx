import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/e/e5lnxchfw.css';
import '../../css/s/sxlpl9tpb.css';
import '../../css/u/uuppug8ib.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="e5lnxchfw"/><path class="sxlpl9tpb"/><path class="uuppug8ib"/></g>`,
		"fallback": "fluent-emoji-flat:sleepy-face",
	});
}

export default Component;
