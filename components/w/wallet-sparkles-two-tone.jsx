import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eootuelhi.css';
import '../../css/a/ai5f1achb.css';
import '../../css/c/c2gj4d9vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eootuelhi"/><path class="ai5f1achb"/><path class="c2gj4d9vs"/></g>`,
		"fallback": "keyline-icons:wallet-sparkles-two-tone",
	});
}

export default Component;
