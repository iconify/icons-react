import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq3q1qbjn.css';
import '../../css/d/ds65nt-eh.css';
import '../../css/q/qvl9c6b0s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq3q1qbjn"/><path clip-rule="evenodd" class="ds65nt-eh"/><path class="qvl9c6b0s"/>`,
		"fallback": "ix:sunset",
	});
}

export default Component;
