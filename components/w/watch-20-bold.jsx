import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8tbbbvzb.css';
import '../../css/v/vanfr9l2e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8tbbbvzb"/><path class="vanfr9l2e"/>`,
		"fallback": "energy-icons:watch-20-bold",
	});
}

export default Component;
