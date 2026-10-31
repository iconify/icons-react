import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/f_sv_ylzn.css';
import '../../css/b/bqueagbgq.css';
import '../../css/i/ixdel4vqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="f_sv_ylzn wm-shadow"/><path class="bqueagbgq wm-shadow"/><path class="ixdel4vqr"/></g>`,
		"fallback": "withicons-brutal:lasso",
	});
}

export default Component;
