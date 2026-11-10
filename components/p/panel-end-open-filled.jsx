import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j05dnx8-k.css';
import '../../css/x/xzf0_rb6r.css';
import '../../css/y/yq4fe1-th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j05dnx8-k"/><path class="xzf0_rb6r"/><path class="yq4fe1-th"/></g>`,
		"fallback": "andrsrxn:panel-end-open-filled",
	});
}

export default Component;
