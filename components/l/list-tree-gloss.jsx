import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wu17btb-r.css';
import '../../css/u/u3unwwaxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k wu17btb-r"/><path class="u3unwwaxn wm-a"/></g>`,
		"fallback": "withicons:list-tree-gloss",
	});
}

export default Component;
