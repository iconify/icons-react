import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kcag22w9s.css';
import '../../css/f/f98ia0txa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kcag22w9s"/><path class="f98ia0txa wm-a"/></g>`,
		"fallback": "withicons:qr-code",
	});
}

export default Component;
