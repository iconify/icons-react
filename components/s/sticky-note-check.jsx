import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lq_bhub-b.css';
import '../../css/t/tk9p2tbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lq_bhub-b"/><path class="tk9p2tbmt"/></g>`,
		"fallback": "vadivam:sticky-note-check",
	});
}

export default Component;
