import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/omvet-b0y.css';
import '../../css/q/q6litmbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="omvet-b0y"/><path class="q6litmbnq"/></g>`,
		"fallback": "vadivam:toggle-right",
	});
}

export default Component;
