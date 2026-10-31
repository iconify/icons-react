import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nsun8p51f.css';
import '../../css/e/e5o0w24kl.css';
import '../../css/b/bvn0b9b_i.css';
import '../../css/w/wnvwz5s0k.css';
import '../../css/j/jhj2v-bhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nsun8p51f wm-shadow"/><path class="e5o0w24kl wm-shadow"/><path class="bvn0b9b_i"/><path class="wnvwz5s0k"/><path class="jhj2v-bhi"/></g>`,
		"fallback": "withicons-brutal:thumbs-down",
	});
}

export default Component;
