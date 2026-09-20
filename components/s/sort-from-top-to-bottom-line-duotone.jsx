import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u9u89mb-h.css';
import '../../css/m/mk03vobfs.css';
import '../../css/t/tg0c1lbwk.css';
import '../../css/t/tk77rcb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u9u89mb-h"/><path class="mk03vobfs"/><path class="tg0c1lbwk"/><path class="tk77rcb1i"/></g>`,
		"fallback": "solar:sort-from-top-to-bottom-line-duotone",
	});
}

export default Component;
