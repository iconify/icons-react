import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a8skcubwr.css';
import '../../css/i/i-1hmncgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="a8skcubwr"/><path class="i-1hmncgu"/></g>`,
		"fallback": "keyline-icons:tablet-check-fill",
	});
}

export default Component;
