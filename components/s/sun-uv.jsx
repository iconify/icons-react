import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te2g1hb7r.css';
import '../../css/z/z4vfolvin.css';
import '../../css/t/t7909obmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="te2g1hb7r"/><path class="z4vfolvin"/><path class="t7909obmj"/></g>`,
		"fallback": "andrsrxn:sun-uv",
	});
}

export default Component;
