import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_p7_xt8v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_p7_xt8v"/>`,
		"fallback": "streamline:signal-full",
	});
}

export default Component;
