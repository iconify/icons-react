import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jc5wlobdx.css';
import '../../css/x/xcxup2bbz.css';
import '../../css/a/ax_ng4bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jc5wlobdx"/><rect transform="matrix(0 -1 -1 0 15 22.43)" class="xcxup2bbz"/><path class="ax_ng4bad"/></g>`,
		"fallback": "andrsrxn:tube-lotion",
	});
}

export default Component;
