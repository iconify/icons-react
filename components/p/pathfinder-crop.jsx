import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kw6voxztb.css';
import '../../css/o/oflic2bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kw6voxztb"/><path class="oflic2bkq"/></g>`,
		"fallback": "hugeicons:pathfinder-crop",
	});
}

export default Component;
