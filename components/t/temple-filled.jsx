import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkh3mii8l.css';
import '../../css/w/w4ucru71v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkh3mii8l"/><path class="w4ucru71v"/>`,
		"fallback": "boxicons:temple-filled",
	});
}

export default Component;
