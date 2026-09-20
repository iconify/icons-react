import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w1xvjqqre.css';
import '../../css/u/uoq1y5w9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w1xvjqqre"/><path class="uoq1y5w9g"/></g>`,
		"fallback": "keyline-icons:timer-reset-two-tone",
	});
}

export default Component;
