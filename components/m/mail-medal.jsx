import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfkufcbrf.css';
import '../../css/j/jtf5idbqa.css';
import '../../css/d/dv9ylfbxn.css';
import '../../css/a/a6l8xqr_g.css';
import '../../css/v/v94zx3btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hfkufcbrf"/><path class="jtf5idbqa"/><path class="dv9ylfbxn"/><path class="a6l8xqr_g"/><path class="v94zx3btr"/></g>`,
		"fallback": "andrsrxn:mail-medal",
	});
}

export default Component;
