import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a2d4gor6c.css';
import '../../css/p/pj75233cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a2d4gor6c"/><path class="pj75233cd"/></g>`,
		"fallback": "coolicons:triangle-help-duocolor-round",
	});
}

export default Component;
