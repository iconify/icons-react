import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg73pq5no.css';
import '../../css/p/p2zr7kfxj.css';
import '../../css/t/t5aekeb8z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg73pq5no"/><path class="p2zr7kfxj"/><path class="t5aekeb8z"/>`,
		"fallback": "streamline-pixel:social-rewards-reward-gift",
	});
}

export default Component;
