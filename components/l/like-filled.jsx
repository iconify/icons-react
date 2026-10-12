import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfzgy9bhx.css';
import '../../css/h/hzodhrb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zfzgy9bhx"/><path class="hzodhrb6w"/></g>`,
		"fallback": "andrsrxn:like-filled",
	});
}

export default Component;
