import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cz55gtb_i.css';
import '../../css/f/fr2vke5ge.css';
import '../../css/u/uru88vgdy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cz55gtb_i"/><path class="fr2vke5ge"/><path class="uru88vgdy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:place-of-worship",
	});
}

export default Component;
