import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fgyarr_hl.css';
import '../../css/j/j64wejbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fgyarr_hl"/><path class="j64wejbxo"/></g>`,
		"fallback": "keyline-icons:sliders-2-vertical-duotone",
	});
}

export default Component;
