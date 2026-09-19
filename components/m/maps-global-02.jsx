import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d62-ihjob.css';
import '../../css/l/l1et6yd0q.css';
import '../../css/c/cc1_t1bch.css';
import '../../css/n/nd34rpu_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d62-ihjob"/><path class="l1et6yd0q"/><path class="cc1_t1bch"/><path class="nd34rpu_u"/></g>`,
		"fallback": "hugeicons:maps-global-02",
	});
}

export default Component;
