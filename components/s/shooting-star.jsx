import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olzoonbax.css';
import '../../css/c/cptcu9bvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="olzoonbax"/><path class="cptcu9bvb"/></g>`,
		"fallback": "andrsrxn:shooting-star",
	});
}

export default Component;
