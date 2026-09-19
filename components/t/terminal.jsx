import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqpsy4b5h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqpsy4b5h"/>`,
		"fallback": "famicons:terminal",
	});
}

export default Component;
