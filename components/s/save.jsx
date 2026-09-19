import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaqxgfbxx.css';
import '../../css/s/sb3_ircqr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaqxgfbxx"/><path class="sb3_ircqr"/>`,
		"fallback": "cil:save",
	});
}

export default Component;
