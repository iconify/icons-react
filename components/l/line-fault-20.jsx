import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtuvxgbwo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtuvxgbwo"/>`,
		"fallback": "energy-icons:line-fault-20",
	});
}

export default Component;
