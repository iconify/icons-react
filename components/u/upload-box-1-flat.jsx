import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mibyxt_3y.css';
import '../../css/z/z7huj2b8v.css';
import '../../css/z/zyek7vb5u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mibyxt_3y"/><path clip-rule="evenodd" class="z7huj2b8v"/><path clip-rule="evenodd" class="zyek7vb5u"/></g>`,
		"fallback": "streamline-flex-color:upload-box-1-flat",
	});
}

export default Component;
