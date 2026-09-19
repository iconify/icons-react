import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mn_gx6bsn.css';
import '../../css/s/shsaom4fn.css';
import '../../css/a/ak3jr5b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mn_gx6bsn"/><path class="shsaom4fn"/><path class="ak3jr5b-q"/></g>`,
		"fallback": "hugeicons:user-roadside",
	});
}

export default Component;
