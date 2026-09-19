import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvxdfup1z.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvxdfup1z"/>`,
		"fallback": "fa-solid:lightbulb",
	});
}

export default Component;
