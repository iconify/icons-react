import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8ql8-b3e.css';
import '../../css/g/g1wyuibzo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="f8ql8-b3e"/><path class="g1wyuibzo"/></g>`,
		"fallback": "cryptocurrency-color:san",
	});
}

export default Component;
