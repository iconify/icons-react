import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/utio7toaw.css';
import '../../css/e/e9_jq6eps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="utio7toaw"/><path class="e9_jq6eps"/></g>`,
		"fallback": "hugeicons:square-pilcrow",
	});
}

export default Component;
