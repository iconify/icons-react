import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slzel_86f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slzel_86f"/>`,
		"fallback": "noviair:message-dots-check",
	});
}

export default Component;
