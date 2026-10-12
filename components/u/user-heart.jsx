import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwm57lbgk.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/h/hxg04hcvc.css';
import '../../css/y/yzo6b-b2q.css';
import '../../css/w/w7-r3tbge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fwm57lbgk"/><path class="b_-gkxb7l"/><path class="hxg04hcvc"/><path class="yzo6b-b2q"/><path class="w7-r3tbge"/></g>`,
		"fallback": "andrsrxn:user-heart",
	});
}

export default Component;
