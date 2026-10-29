import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t3rrtrv_m.css';
import '../../css/n/nm0nw7bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t3rrtrv_m"/><path class="nm0nw7bwy"/></g>`,
		"fallback": "vadivam:redo-dot",
	});
}

export default Component;
