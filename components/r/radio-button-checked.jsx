import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_rrxxb2u.css';
import '../../css/u/u87-habzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d_rrxxb2u"/><path clip-rule="evenodd" class="u87-habzv"/></g>`,
		"fallback": "nrk:radio-button-checked",
	});
}

export default Component;
