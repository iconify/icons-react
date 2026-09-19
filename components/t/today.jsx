import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc7ci5y7g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc7ci5y7g"/>`,
		"fallback": "famicons:today",
	});
}

export default Component;
