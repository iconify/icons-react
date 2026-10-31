import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bq0pqg4nx.css';
import '../../css/d/dubabk8wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bq0pqg4nx"/><path class="dubabk8wl"/></g>`,
		"fallback": "coolicons:plane-landing-side-duotone-round",
	});
}

export default Component;
