import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh9opkozm.css';
import '../../css/d/dc1ph1bfg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh9opkozm"/><path class="dc1ph1bfg"/>`,
		"fallback": "energy-icons:move-vertical-48",
	});
}

export default Component;
