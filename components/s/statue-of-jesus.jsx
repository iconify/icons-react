import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcomptb_k.css';
import '../../css/l/lev8w9b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qcomptb_k"/><path class="lev8w9b0x"/></g>`,
		"fallback": "tdesign:statue-of-jesus",
	});
}

export default Component;
