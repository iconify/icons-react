import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jyxt6r5xk.css';
import '../../css/e/ez46996cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jyxt6r5xk"/><path class="ez46996cd"/></g>`,
		"fallback": "keyline-icons:sun-fill",
	});
}

export default Component;
