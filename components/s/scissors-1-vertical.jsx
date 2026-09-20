import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-wkcrisg.css';
import '../../css/u/up737eb8h.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-wkcrisg"/><path class="up737eb8h"/>`,
		"fallback": "lineicons:scissors-1-vertical",
	});
}

export default Component;
