import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2mv7oq0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2mv7oq0o"/>`,
		"fallback": "lucide:message-square-more",
	});
}

export default Component;
