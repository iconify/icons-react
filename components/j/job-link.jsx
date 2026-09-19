import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y5xd74r1k.css';
import '../../css/z/znk0bvbqq.css';
import '../../css/s/sippiub7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y5xd74r1k"/><path class="znk0bvbqq"/><path class="sippiub7w"/></g>`,
		"fallback": "hugeicons:job-link",
	});
}

export default Component;
