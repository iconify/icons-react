import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2bw7kbqw.css';

const viewBox = {"width":1360,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2bw7kbqw"/>`,
		"fallback": "websymbol:retweet",
	});
}

export default Component;
