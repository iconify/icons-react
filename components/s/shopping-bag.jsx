import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj7hf3b6m.css';
import '../../css/s/ssdo0ob-m.css';
import '../../css/c/c7hixzgbo.css';
import '../../css/c/ct0vsj1oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hj7hf3b6m"/><path class="ssdo0ob-m"/><path class="c7hixzgbo"/><path class="ct0vsj1oc"/></g>`,
		"fallback": "streamline-cyber-color:shopping-bag",
	});
}

export default Component;
