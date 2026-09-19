import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgjm2286q.css';

const viewBox = {"width":455,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgjm2286q"/>`,
		"fallback": "ls:p-upper-case",
	});
}

export default Component;
