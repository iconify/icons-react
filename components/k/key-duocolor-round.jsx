import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o9v-03xhl.css';
import '../../css/y/ykdrq7mgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o9v-03xhl"/><path class="ykdrq7mgm"/></g>`,
		"fallback": "coolicons:key-duocolor-round",
	});
}

export default Component;
