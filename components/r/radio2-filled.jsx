import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jq9ec8u2m.css';
import '../../css/w/wcr_kybdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jq9ec8u2m"/><path clip-rule="evenodd" class="wcr_kybdz"/></g>`,
		"fallback": "reicon:radio2-filled",
	});
}

export default Component;
