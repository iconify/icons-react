import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2f83dboy.css';
import '../../css/a/a6ke6j7kv.css';
import '../../css/z/zdwupmf9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j2f83dboy"/><path class="a6ke6j7kv"/><path class="zdwupmf9b"/></g>`,
		"fallback": "andrsrxn:proportions",
	});
}

export default Component;
