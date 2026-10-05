import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rwlkj_bky.css';
import '../../css/e/evex28bfe.css';
import '../../css/d/dpr05y1rb.css';
import '../../css/p/pb0ihgble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="rwlkj_bky"/><path class="evex28bfe"/><path class="dpr05y1rb"/><path class="pb0ihgble"/></g>`,
		"fallback": "matita:quote",
	});
}

export default Component;
