import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wy94go95p.css';
import '../../css/l/lhxy8mbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wy94go95p"/><path class="lhxy8mbnj"/></g>`,
		"fallback": "keyline-icons:truck-plus-two-tone",
	});
}

export default Component;
