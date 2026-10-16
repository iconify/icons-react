import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqco-_b5t.css';
import '../../css/f/f4xd5tbaj.css';
import '../../css/r/rcm68kbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mqco-_b5t"/><path class="f4xd5tbaj"/><path class="rcm68kbxb"/></g>`,
		"fallback": "andrsrxn:strawberry",
	});
}

export default Component;
