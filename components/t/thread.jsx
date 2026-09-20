import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/g/gdltapb1q.css';
import '../../css/x/xbbr8jbxw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="gdltapb1q"/><path class="xbbr8jbxw"/></g>`,
		"fallback": "system-uicons:thread",
	});
}

export default Component;
