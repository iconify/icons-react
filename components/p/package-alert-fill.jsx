import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j6ddfqney.css';
import '../../css/e/ejqcdexxx.css';
import '../../css/w/w8slmsefx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="j6ddfqney"/><path class="ejqcdexxx"/><path class="w8slmsefx"/></g>`,
		"fallback": "keyline-icons:package-alert-fill",
	});
}

export default Component;
