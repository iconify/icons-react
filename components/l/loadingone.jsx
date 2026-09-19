import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9r76zbrt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9r76zbrt"/>`,
		"fallback": "whh:loadingone",
	});
}

export default Component;
