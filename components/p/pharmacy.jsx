import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5_g_9b5v.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5_g_9b5v"/>`,
		"fallback": "temaki:pharmacy",
	});
}

export default Component;
