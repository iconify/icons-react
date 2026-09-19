import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4l5a2vcw.css';
import '../../css/h/h40gxbcln.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4l5a2vcw"/><path class="h40gxbcln"/>`,
		"fallback": "cil:task",
	});
}

export default Component;
