import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q2496xh2m.css';
import '../../css/o/oo4hkjbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q2496xh2m"/><path class="oo4hkjbji"/></g>`,
		"fallback": "vadivam:redo-dot",
	});
}

export default Component;
