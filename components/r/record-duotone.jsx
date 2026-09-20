import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nc9xqi5th.css';
import '../../css/e/e2hg1hbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="nc9xqi5th"/><path clip-rule="evenodd" class="e2hg1hbxv"/></g>`,
		"fallback": "reicon:record-duotone",
	});
}

export default Component;
