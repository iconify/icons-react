import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i7yq0bv7m.css';
import '../../css/q/q4ps16bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i7yq0bv7m"/><path class="q4ps16bdl"/></g>`,
		"fallback": "mage:upload",
	});
}

export default Component;
