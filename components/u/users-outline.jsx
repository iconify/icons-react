import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/owtlytbtz.css';
import '../../css/j/jeiddxb6p.css';
import '../../css/t/t0tb6_4us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="users-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="owtlytbtz"/><path class="jeiddxb6p"/><path class="t0tb6_4us"/></g></g>`,
		"fallback": "cuida:users-outline",
	});
}

export default Component;
