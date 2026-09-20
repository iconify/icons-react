import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_9untkln.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_9untkln"/>`,
		"fallback": "streamline-flex:insurance-hand-1",
	});
}

export default Component;
