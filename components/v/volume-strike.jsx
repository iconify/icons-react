import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzgbc4l5y.css';
import '../../css/q/qebutnwnh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzgbc4l5y"/><path class="qebutnwnh"/>`,
		"fallback": "foundation:volume-strike",
	});
}

export default Component;
