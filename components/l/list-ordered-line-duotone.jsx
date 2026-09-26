import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vo6pq_eni.css';
import '../../css/q/qe311mboy.css';
import '../../css/b/b7flqff0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vo6pq_eni"/><path class="qe311mboy"/><path class="b7flqff0r"/></g>`,
		"fallback": "solar:list-ordered-line-duotone",
	});
}

export default Component;
