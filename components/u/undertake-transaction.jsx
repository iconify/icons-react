import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpb2ehltb.css';
import '../../css/p/px1jy7twn.css';
import '../../css/h/h5nbl63hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vpb2ehltb"/><path clip-rule="evenodd" class="px1jy7twn"/><path class="h5nbl63hy"/></g>`,
		"fallback": "tdesign:undertake-transaction",
	});
}

export default Component;
