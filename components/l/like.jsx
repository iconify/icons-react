import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wss56ybga.css';
import '../../css/p/p3ixe5bhp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wss56ybga"/><path class="p3ixe5bhp"/>`,
		"fallback": "ei:like",
	});
}

export default Component;
