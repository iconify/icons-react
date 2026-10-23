import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c58q650vd.css';
import '../../css/o/ot_220b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c58q650vd"/><path class="ot_220b_z"/></g>`,
		"fallback": "vadivam:monitor-pc",
	});
}

export default Component;
