import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvy5bib4h.css';
import '../../css/q/q5mz3s69a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fvy5bib4h"/><path class="q5mz3s69a"/></g>`,
		"fallback": "coolicons:user-star-corner-duotone-round",
	});
}

export default Component;
