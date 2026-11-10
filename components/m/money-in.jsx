import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9qt-nd0n.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/i/i4eb_4buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u9qt-nd0n"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="i4eb_4buf"/></g>`,
		"fallback": "andrsrxn:money-in",
	});
}

export default Component;
