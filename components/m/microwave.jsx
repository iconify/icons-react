import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/akps4tmgg.css';
import '../../css/p/p8-s00bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="akps4tmgg"/><path class="p8-s00bdk"/></g>`,
		"fallback": "vadivam:microwave",
	});
}

export default Component;
