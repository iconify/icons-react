import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_9832jzs.css';
import '../../css/s/s5cgq7bny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="d_9832jzs"/><path class="s5cgq7bny"/>`,
		"fallback": "famicons:watch-outline",
	});
}

export default Component;
