import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i3f98qc6r.css';
import '../../css/w/wazo6x84u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i3f98qc6r"/><path class="wazo6x84u"/></g>`,
		"fallback": "bi:pass",
	});
}

export default Component;
