import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og5k9ackk.css';
import '../../css/x/x2q17r7hj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og5k9ackk"/><path class="x2q17r7hj"/>`,
		"fallback": "selfhst:simplex-chat",
	});
}

export default Component;
