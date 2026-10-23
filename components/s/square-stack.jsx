import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vbcduhp6n.css';
import '../../css/i/i0in-bbuh.css';
import '../../css/x/x-qcbehps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vbcduhp6n"/><path class="i0in-bbuh"/><path class="x-qcbehps"/></g>`,
		"fallback": "vadivam:square-stack",
	});
}

export default Component;
