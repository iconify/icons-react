import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu8469bse.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pq36bjb0y.css';
import '../../css/p/pzjv5fl5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu8469bse secondary"/><g class="dt0cm9dhy primary"><path class="pq36bjb0y"/><path class="pzjv5fl5u"/></g>`,
		"fallback": "iconaut:mirror-duo",
	});
}

export default Component;
