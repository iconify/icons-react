import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wil2g5uqt.css';
import '../../css/r/r76m87b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wil2g5uqt"/><path class="r76m87b2v"/></g>`,
		"fallback": "andrsrxn:panels-end-filled",
	});
}

export default Component;
