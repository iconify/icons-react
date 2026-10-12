import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/akz5_vbwu.css';
import '../../css/j/jf75smb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="akz5_vbwu"/><path class="jf75smb4m"/></g>`,
		"fallback": "andrsrxn:molecules",
	});
}

export default Component;
