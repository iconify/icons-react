import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh8kj0bic.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh8kj0bic"/>`,
		"fallback": "websymbol:progress-1",
	});
}

export default Component;
