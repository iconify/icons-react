import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s2b4_-6yb.css';
import '../../css/l/l1op41bpk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s2b4_-6yb"/><path class="l1op41bpk"/></g>`,
		"fallback": "streamline-flex-color:thread-post-tweet-flat",
	});
}

export default Component;
