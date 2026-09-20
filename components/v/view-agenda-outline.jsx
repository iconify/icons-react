import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a851iwg5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a851iwg5s"/>`,
		"fallback": "mdi:view-agenda-outline",
	});
}

export default Component;
