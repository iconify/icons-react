import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo64yvbkk.css';
import '../../css/q/q5h959_9p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo64yvbkk"/><path class="q5h959_9p"/>`,
		"fallback": "energy-icons:pen-sparkle-48",
	});
}

export default Component;
