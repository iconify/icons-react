import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qynpu4n-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qynpu4n-e"/>`,
		"fallback": "lucide:squares-subtract",
	});
}

export default Component;
