import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7pu0ex4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7pu0ex4l"/>`,
		"fallback": "lucide:split-square-vertical",
	});
}

export default Component;
