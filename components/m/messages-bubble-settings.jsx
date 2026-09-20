import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc6xhac8s.css';
import '../../css/b/bfv7rkbai.css';
import '../../css/d/ds-s0gbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc6xhac8s"/><path class="bfv7rkbai"/><path class="ds-s0gbnc"/>`,
		"fallback": "streamline-freehand:messages-bubble-settings",
	});
}

export default Component;
