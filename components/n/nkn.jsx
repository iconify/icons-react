import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw34c_kaa.css';
import '../../css/q/qj3082b7s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="xw34c_kaa"/><path class="qj3082b7s"/></g>`,
		"fallback": "cryptocurrency-color:nkn",
	});
}

export default Component;
