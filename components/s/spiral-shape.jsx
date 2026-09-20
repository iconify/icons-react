import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp6l-5t5b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp6l-5t5b"/>`,
		"fallback": "streamline-color:spiral-shape",
	});
}

export default Component;
