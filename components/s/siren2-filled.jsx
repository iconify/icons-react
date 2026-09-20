import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/avskq2y1q.css';
import '../../css/f/fhlmw7bsz.css';
import '../../css/q/qr6e_mnfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="avskq2y1q"/><path clip-rule="evenodd" class="fhlmw7bsz"/><path class="qr6e_mnfo"/></g>`,
		"fallback": "reicon:siren2-filled",
	});
}

export default Component;
