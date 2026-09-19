import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b38j5bbzc.css';
import '../../css/j/jrtk9-boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b38j5bbzc"/><path class="jrtk9-boo"/></g>`,
		"fallback": "hugeicons:pacman-01",
	});
}

export default Component;
