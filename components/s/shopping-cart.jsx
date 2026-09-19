import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/if3-ak7hq.css';
import '../../css/f/f41mwefxg.css';
import '../../css/x/xfl2f4c9h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="if3-ak7hq"/><path class="f41mwefxg"/><path class="xfl2f4c9h"/></g>`,
		"fallback": "fluent-emoji-flat:shopping-cart",
	});
}

export default Component;
