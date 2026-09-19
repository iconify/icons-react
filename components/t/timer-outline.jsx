import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap74bobrt.css';
import '../../css/s/srw4vobtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap74bobrt"/><path class="srw4vobtr"/>`,
		"fallback": "basil:timer-outline",
	});
}

export default Component;
