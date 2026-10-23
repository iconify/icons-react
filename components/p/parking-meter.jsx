import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-h3mhb4z.css';
import '../../css/q/q_ig7pb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p-h3mhb4z"/><path class="q_ig7pb6j"/></g>`,
		"fallback": "vadivam:parking-meter",
	});
}

export default Component;
