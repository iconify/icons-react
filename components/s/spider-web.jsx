import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yyyaccujc.css';
import '../../css/h/hcnpmf2td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yyyaccujc"/><path clip-rule="evenodd" class="hcnpmf2td"/></g>`,
		"fallback": "andrsrxn:spider-web",
	});
}

export default Component;
