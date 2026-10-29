import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ncr-bgbhj.css';
import '../../css/g/g1vkwab6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ncr-bgbhj"/><path class="g1vkwab6p wm-s"/></g>`,
		"fallback": "withicons:red-envelope-solid",
	});
}

export default Component;
