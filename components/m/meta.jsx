import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-8p8db5g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-8p8db5g"/>`,
		"fallback": "streamline-color:meta",
	});
}

export default Component;
