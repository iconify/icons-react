import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a8skcubwr.css';
import '../../css/v/v8xfyt3_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="a8skcubwr"/><path class="v8xfyt3_q"/></g>`,
		"fallback": "keyline-icons:tablet-arrow-left-fill",
	});
}

export default Component;
