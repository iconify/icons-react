import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-ara7uci.css';
import '../../css/y/yt1kjcbtq.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-ara7uci"/><path class="yt1kjcbtq"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:invoice-paid-20",
	});
}

export default Component;
