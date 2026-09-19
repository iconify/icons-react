import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s735ntn-w.css';
import '../../css/h/hq92ooc8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s735ntn-w"/><path class="hq92ooc8i"/></g>`,
		"fallback": "hugeicons:threads-rectangle",
	});
}

export default Component;
