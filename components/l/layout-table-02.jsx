import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c06h1db0u.css';
import '../../css/p/ptbssxbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c06h1db0u"/><path class="ptbssxbxf"/></g>`,
		"fallback": "hugeicons:layout-table-02",
	});
}

export default Component;
