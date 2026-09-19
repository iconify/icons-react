import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzdm7fsxu.css';
import '../../css/l/lw4h2zb0z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzdm7fsxu"/><path class="lw4h2zb0z"/>`,
		"fallback": "famicons:push-outline",
	});
}

export default Component;
