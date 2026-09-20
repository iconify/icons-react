import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/eprdb-1bb.css';
import '../../css/f/f472do-je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="eprdb-1bb"/><path class="f472do-je"/></g>`,
		"fallback": "keyline-icons:sliders-2-horizontal-sharp-two-tone",
	});
}

export default Component;
