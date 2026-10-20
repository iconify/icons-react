import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wka1dhd5q.css';
import '../../css/v/vzdgmebcz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wka1dhd5q"/><path class="vzdgmebcz"/>`,
		"fallback": "energy-icons:line-height-48",
	});
}

export default Component;
