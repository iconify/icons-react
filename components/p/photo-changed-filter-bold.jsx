import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sad50o9nr.css';
import '../../css/q/q-ha4poyz.css';
import '../../css/u/u0muthbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sad50o9nr"/><path class="q-ha4poyz"/><path class="u0muthbeq"/>`,
		"fallback": "streamline-ultimate:photo-changed-filter-bold",
	});
}

export default Component;
