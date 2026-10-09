import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i36jb0_kr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i36jb0_kr"/>`,
		"fallback": "energy-icons:waterfall-48",
	});
}

export default Component;
