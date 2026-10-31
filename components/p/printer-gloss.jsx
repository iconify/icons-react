import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/roswwubvn.css';
import '../../css/z/z06pn9y-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="roswwubvn wm-k"/><path class="wm-a z06pn9y-n"/></g>`,
		"fallback": "withicons:printer-gloss",
	});
}

export default Component;
