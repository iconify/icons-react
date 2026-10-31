import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tqifnvtel.css';
import '../../css/d/d98a3yb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tqifnvtel wm-k"/><path class="d98a3yb4m wm-a"/></g>`,
		"fallback": "withicons:spy-gloss",
	});
}

export default Component;
