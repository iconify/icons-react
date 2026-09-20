import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mj1sgobgc.css';
import '../../css/u/uad3khkvn.css';
import '../../css/d/d9j68j1zf.css';
import '../../css/j/jrqrxdbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mj1sgobgc"/><path class="uad3khkvn"/><path clip-rule="evenodd" class="d9j68j1zf"/><path class="jrqrxdbeg"/></g>`,
		"fallback": "streamline-sharp-color:store-2-flat",
	});
}

export default Component;
