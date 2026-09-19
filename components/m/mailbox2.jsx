import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n49gkqb1a.css';
import '../../css/w/w22hfb7hq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n49gkqb1a"/><path class="w22hfb7hq"/></g>`,
		"fallback": "bi:mailbox2",
	});
}

export default Component;
