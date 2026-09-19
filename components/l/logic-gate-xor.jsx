import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhovvmb6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhovvmb6f"/>`,
		"fallback": "game-icons:logic-gate-xor",
	});
}

export default Component;
