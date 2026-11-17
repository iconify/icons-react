import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w8i6b94qm.css';
import '../../css/t/t-m40mb4b.css';
import '../../css/s/sk8buccng.css';
import '../../css/f/furko9bob.css';
import '../../css/x/xdqj7bbnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="w8i6b94qm"/><path class="t-m40mb4b"/><path class="sk8buccng"/><path class="furko9bob"/><path class="xdqj7bbnx"/></g>`,
		"fallback": "matita:radio",
	});
}

export default Component;
