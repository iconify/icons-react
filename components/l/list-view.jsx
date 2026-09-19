import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfi3wizrq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfi3wizrq"/>`,
		"fallback": "dashicons:list-view",
	});
}

export default Component;
