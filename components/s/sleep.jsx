import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq14sv5uy.css';
import '../../css/g/gg0fabcgo.css';
import '../../css/i/iqbw1sbec.css';
import '../../css/b/bf51pnblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dq14sv5uy"/><path class="gg0fabcgo"/><path clip-rule="evenodd" class="iqbw1sbec"/><path class="bf51pnblt"/></g>`,
		"fallback": "andrsrxn:sleep",
	});
}

export default Component;
