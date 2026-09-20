import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iuljwwupt.css';
import '../../css/p/pxekbrbjq.css';
import '../../css/u/u5w4_1bel.css';
import '../../css/e/ez-oahbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iuljwwupt"/><path class="pxekbrbjq"/><path class="u5w4_1bel"/><path class="ez-oahbdy"/></g>`,
		"fallback": "tdesign:markup",
	});
}

export default Component;
