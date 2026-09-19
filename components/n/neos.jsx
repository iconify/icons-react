import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v-4loxeou.css';
import '../../css/a/ar5a9gy3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="v-4loxeou"/><path class="ar5a9gy3s"/></g>`,
		"fallback": "cryptocurrency-color:neos",
	});
}

export default Component;
