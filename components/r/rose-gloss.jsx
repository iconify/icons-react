import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q00u_9bvq.css';
import '../../css/e/elosu8b4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q00u_9bvq wm-k"/><path class="elosu8b4y wm-a"/></g>`,
		"fallback": "withicons:rose-gloss",
	});
}

export default Component;
