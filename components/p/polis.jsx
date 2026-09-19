import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-27vacvz.css';
import '../../css/s/stue3wu7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="k-27vacvz"/><path class="stue3wu7b"/></g>`,
		"fallback": "cryptocurrency-color:polis",
	});
}

export default Component;
