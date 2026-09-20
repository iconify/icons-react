import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fen3q3b6p.css';
import '../../css/i/iaicoxbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fen3q3b6p"/><path class="iaicoxbvn"/></g>`,
		"fallback": "reicon:siren-filled",
	});
}

export default Component;
