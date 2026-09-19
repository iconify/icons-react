import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rz3p3kv0u.css';
import '../../css/o/omeeehbxv.css';
import '../../css/u/u760mxb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rz3p3kv0u"/><path clip-rule="evenodd" class="omeeehbxv"/><path class="u760mxb5t"/></g>`,
		"fallback": "hugeicons:key-square",
	});
}

export default Component;
