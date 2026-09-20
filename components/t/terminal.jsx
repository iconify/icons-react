import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obib_9bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obib_9bux"/>`,
		"fallback": "lucide:terminal",
	});
}

export default Component;
