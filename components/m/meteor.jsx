import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu1nxz26a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu1nxz26a"/>`,
		"fallback": "whh:meteor",
	});
}

export default Component;
