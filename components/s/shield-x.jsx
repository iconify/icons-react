import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aj2f_mbud.css';
import '../../css/i/itrc9dbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aj2f_mbud"/><path class="itrc9dbho"/></g>`,
		"fallback": "andrsrxn:shield-x",
	});
}

export default Component;
