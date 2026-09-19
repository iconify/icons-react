import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qopg05uxx.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qopg05uxx"/>`,
		"fallback": "ps:retweet",
	});
}

export default Component;
