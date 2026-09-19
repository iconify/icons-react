import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekgj4zbqv.css';
import '../../css/m/mfztm5v2n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ekgj4zbqv"/><path class="mfztm5v2n"/></g>`,
		"fallback": "cryptocurrency-color:mtl",
	});
}

export default Component;
