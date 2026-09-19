import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvr0gmblg.css';
import '../../css/o/od6unwbqx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvr0gmblg"/><path class="od6unwbqx"/>`,
		"fallback": "cil:keyboard",
	});
}

export default Component;
