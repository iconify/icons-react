import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zhp98zb5e.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/l/l1rju_b8l.css';
import '../../css/p/piob4sz7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zhp98zb5e"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="l1rju_b8l"/><path class="piob4sz7r"/></g>`,
		"fallback": "andrsrxn:money-warning",
	});
}

export default Component;
