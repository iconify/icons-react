import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d__305b4d.css';
import '../../css/e/ellgwfopr.css';
import '../../css/f/fr0aq1ayq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d__305b4d"/><path class="ellgwfopr"/><path class="fr0aq1ayq"/></g>`,
		"fallback": "pixelarticons:reload-sharp",
	});
}

export default Component;
