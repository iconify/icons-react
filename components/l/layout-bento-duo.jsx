import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2ku2kb3t.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f3326pq5l.css';
import '../../css/l/lnuqcu1vn.css';
import '../../css/o/o6rrpwbqi.css';
import '../../css/q/qhiifsb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary y2ku2kb3t"/><g class="dt0cm9dhy primary"><path class="f3326pq5l"/><path class="lnuqcu1vn"/><path class="o6rrpwbqi"/><path class="qhiifsb6o"/></g>`,
		"fallback": "iconaut:layout-bento-duo",
	});
}

export default Component;
