import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pzck7wbzu.css';
import '../../css/z/zu2u1mcjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pzck7wbzu"/><path class="zu2u1mcjz"/></g>`,
		"fallback": "keyline-icons:reply-all-two-tone",
	});
}

export default Component;
