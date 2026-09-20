import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/klmgxwicg.css';
import '../../css/t/t8jbi9bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="klmgxwicg"/><path class="t8jbi9bgw"/></g>`,
		"fallback": "proicons:megaphone-loud",
	});
}

export default Component;
