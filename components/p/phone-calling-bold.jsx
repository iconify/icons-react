import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxzy99kos.css';
import '../../css/n/nphvxqb8a.css';
import '../../css/k/k7c0ktjdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rxzy99kos"/><path class="nphvxqb8a"/><path class="k7c0ktjdy"/></g>`,
		"fallback": "solar:phone-calling-bold",
	});
}

export default Component;
