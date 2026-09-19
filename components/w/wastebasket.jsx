import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pzvtiub2l.css';
import '../../css/e/e2qh15hmf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pzvtiub2l"/><path class="e2qh15hmf"/></g>`,
		"fallback": "fluent-emoji-flat:wastebasket",
	});
}

export default Component;
