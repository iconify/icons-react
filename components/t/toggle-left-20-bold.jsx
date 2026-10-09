import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atfdt7ybg.css';
import '../../css/l/lxmkcbctr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atfdt7ybg"/><path class="lxmkcbctr"/>`,
		"fallback": "energy-icons:toggle-left-20-bold",
	});
}

export default Component;
