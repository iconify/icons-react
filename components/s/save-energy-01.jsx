import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rbq_0qdep.css';
import '../../css/b/boxbhb0ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rbq_0qdep"/><path class="boxbhb0ua"/></g>`,
		"fallback": "hugeicons:save-energy-01",
	});
}

export default Component;
