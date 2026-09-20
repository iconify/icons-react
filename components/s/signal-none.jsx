import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1ewhsb_w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1ewhsb_w"/>`,
		"fallback": "streamline:signal-none",
	});
}

export default Component;
