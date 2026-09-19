import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbr9q9ucb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbr9q9ucb"/>`,
		"fallback": "famicons:sparkles-sharp",
	});
}

export default Component;
