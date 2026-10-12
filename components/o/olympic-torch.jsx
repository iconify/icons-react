import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yl3u9byce.css';
import '../../css/p/pw6214blu.css';
import '../../css/k/kiw2ik2ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yl3u9byce"/><path class="pw6214blu"/><path class="kiw2ik2ii"/></g>`,
		"fallback": "andrsrxn:olympic-torch",
	});
}

export default Component;
