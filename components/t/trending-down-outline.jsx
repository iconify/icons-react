import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wev0scb4m.css';
import '../../css/m/mi0qv-kbj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wev0scb4m"/><path class="mi0qv-kbj"/>`,
		"fallback": "famicons:trending-down-outline",
	});
}

export default Component;
