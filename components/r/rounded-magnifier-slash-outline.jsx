import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hl7obyb0a.css';
import '../../css/i/iq082ildw.css';
import '../../css/l/l2abzqbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hl7obyb0a"/><path class="iq082ildw"/><path clip-rule="evenodd" class="l2abzqbjr"/></g>`,
		"fallback": "solar:rounded-magnifier-slash-outline",
	});
}

export default Component;
