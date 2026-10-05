import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gm1kg4bns.css';
import '../../css/u/un-342unp.css';
import '../../css/l/lthd-8-lk.css';
import '../../css/k/k93q6lpfs.css';
import '../../css/v/vtuxlxfhn.css';
import '../../css/u/ub9qzcbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="gm1kg4bns"/><path class="un-342unp"/><path class="lthd-8-lk"/><path class="k93q6lpfs"/><path class="vtuxlxfhn"/><path class="ub9qzcbkt"/></g>`,
		"fallback": "matita:sliders",
	});
}

export default Component;
