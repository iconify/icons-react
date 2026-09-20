import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k105obc0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k105obc0b"/>`,
		"fallback": "lucide:message-circle",
	});
}

export default Component;
