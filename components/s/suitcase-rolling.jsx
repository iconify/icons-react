import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqnz8m81q.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqnz8m81q"/>`,
		"fallback": "fa-solid:suitcase-rolling",
	});
}

export default Component;
