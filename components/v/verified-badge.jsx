import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/skuel3ujt.css';
import '../../css/u/u6uh8ob_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="skuel3ujt"/><path class="u6uh8ob_t"/></g>`,
		"fallback": "iconoir:verified-badge",
	});
}

export default Component;
