import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jywbbswph.css';
import '../../css/i/igaufdcqm.css';
import '../../css/w/wz923xb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jywbbswph"/><path class="igaufdcqm"/><path class="wz923xb7m"/></g>`,
		"fallback": "hugeicons:scan-face",
	});
}

export default Component;
