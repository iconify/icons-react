import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3fx5nemq.css';
import '../../css/k/knckjdbay.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k3fx5nemq"/><path class="knckjdbay"/></g>`,
		"fallback": "quill:label",
	});
}

export default Component;
