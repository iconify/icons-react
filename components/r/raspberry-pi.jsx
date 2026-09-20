import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj8rmnbdx.css';
import '../../css/b/brx3lrbll.css';
import '../../css/q/qa-v84whg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj8rmnbdx"/><path class="brx3lrbll"/><path class="qa-v84whg"/>`,
		"fallback": "selfhst:raspberry-pi",
	});
}

export default Component;
