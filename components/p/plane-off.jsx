import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh5t2rbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh5t2rbnv"/>`,
		"fallback": "lucide:plane-off",
	});
}

export default Component;
