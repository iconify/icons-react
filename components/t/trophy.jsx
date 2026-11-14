import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fql3h1ufo.css';
import '../../css/x/x0wrewc6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fql3h1ufo"/><path class="x0wrewc6p"/></g>`,
		"fallback": "codex:trophy",
	});
}

export default Component;
