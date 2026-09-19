import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1unvhb9q.css';
import '../../css/i/inkg4h-8v.css';
import '../../css/l/lcly8xbdq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1unvhb9q"/><path class="inkg4h-8v"/><path class="lcly8xbdq"/>`,
		"fallback": "fxemoji:victoryhand",
	});
}

export default Component;
