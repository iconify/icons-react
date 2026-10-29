import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi974y_9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi974y_9r"/>`,
		"fallback": "lucide:saudi-riyal",
	});
}

export default Component;
