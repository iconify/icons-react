import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qphc-ub_r.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qphc-ub_r"/>`,
		"fallback": "whh:ipod",
	});
}

export default Component;
