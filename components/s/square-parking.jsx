import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e9_jq6eps.css';
import '../../css/l/l3ocgybxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e9_jq6eps"/><path class="l3ocgybxm"/></g>`,
		"fallback": "hugeicons:square-parking",
	});
}

export default Component;
