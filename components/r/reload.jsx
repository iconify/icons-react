import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e5mt0fb8s.css';
import '../../css/c/c5o3esbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e5mt0fb8s"/><path class="c5o3esbci"/></g>`,
		"fallback": "tabler:reload",
	});
}

export default Component;
