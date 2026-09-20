import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xo3yzqm_f.css';
import '../../css/a/awitvcbqn.css';
import '../../css/q/qrv33tblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xo3yzqm_f"/><path class="awitvcbqn"/><path clip-rule="evenodd" class="qrv33tblr"/></g>`,
		"fallback": "solar:pills-bold",
	});
}

export default Component;
