import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a8skcubwr.css';
import '../../css/i/iaqk2us5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="a8skcubwr"/><path class="iaqk2us5d"/></g>`,
		"fallback": "keyline-icons:tablet-arrow-in-up-fill",
	});
}

export default Component;
