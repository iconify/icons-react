import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fcwncf4qh.css';
import '../../css/a/awuta7b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fcwncf4qh"/><path class="awuta7b3a"/></g>`,
		"fallback": "hugeicons:smart-watch-02",
	});
}

export default Component;
