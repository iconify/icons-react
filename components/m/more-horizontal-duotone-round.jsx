import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi6e2tbte.css';
import '../../css/a/a5vhhab8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pi6e2tbte"/><path class="a5vhhab8y"/></g>`,
		"fallback": "coolicons:more-horizontal-duotone-round",
	});
}

export default Component;
