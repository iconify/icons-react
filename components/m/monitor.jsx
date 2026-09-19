import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y956sdb7b.css';
import '../../css/p/p-0qo7b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y956sdb7b"/><path class="p-0qo7b4o"/></g>`,
		"fallback": "hugeicons:monitor",
	});
}

export default Component;
