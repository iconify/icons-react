import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ufh2b_u1x.css';
import '../../css/e/evssnjb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ufh2b_u1x"/><path class="evssnjb9x"/></g>`,
		"fallback": "vadivam:playing-cards",
	});
}

export default Component;
