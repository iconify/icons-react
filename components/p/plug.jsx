import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odkq7slmq.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odkq7slmq"/>`,
		"fallback": "fa:plug",
	});
}

export default Component;
