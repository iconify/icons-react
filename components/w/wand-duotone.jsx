import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kosaz9b_v.css';
import '../../css/r/rsad9abjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kosaz9b_v"/><path class="rsad9abjr"/></g>`,
		"fallback": "keyline-icons:wand-duotone",
	});
}

export default Component;
