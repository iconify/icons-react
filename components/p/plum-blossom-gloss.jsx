import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fm5qzvb4m.css';
import '../../css/u/ulbuw7bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fm5qzvb4m wm-k"/><path class="ulbuw7bda wm-s"/></g>`,
		"fallback": "withicons:plum-blossom-gloss",
	});
}

export default Component;
