import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m0c3q_bwj.css';
import '../../css/a/abrdwn46r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m0c3q_bwj"/><path class="abrdwn46r"/></g>`,
		"fallback": "keyline-icons:skip-back-fill",
	});
}

export default Component;
