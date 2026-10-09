import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t62z6ibns.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t62z6ibns"/>`,
		"fallback": "energy-icons:surf-20",
	});
}

export default Component;
