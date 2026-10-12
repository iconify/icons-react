import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxp0hf4-q.css';
import '../../css/e/eh305wv-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wxp0hf4-q"/><path class="eh305wv-f"/></g>`,
		"fallback": "andrsrxn:star-half",
	});
}

export default Component;
