import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1tmpftnx.css';
import '../../css/w/wmjaqnb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w1tmpftnx"/><path class="wmjaqnb7b"/></g>`,
		"fallback": "majesticons:umbrella",
	});
}

export default Component;
