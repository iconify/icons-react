import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0ng4k_tk.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0ng4k_tk"/>`,
		"fallback": "websymbol:resize-full-circle",
	});
}

export default Component;
