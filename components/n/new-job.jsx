import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bhhkc0bga.css';
import '../../css/u/u4nvvww9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bhhkc0bga"/><path class="u4nvvww9t"/></g>`,
		"fallback": "hugeicons:new-job",
	});
}

export default Component;
