import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dnn4w35hm.css';
import '../../css/d/d8meufkqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dnn4w35hm"/><path class="d8meufkqa"/></g>`,
		"fallback": "keyline-icons:layers-fill",
	});
}

export default Component;
