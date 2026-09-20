import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hxxme0dzb.css';
import '../../css/j/j1etcibqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hxxme0dzb"/><path class="j1etcibqm"/></g>`,
		"fallback": "tabler:mood-off",
	});
}

export default Component;
