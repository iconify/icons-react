import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb4jxhscq.css';
import '../../css/j/jkq7-hbwz.css';
import '../../css/f/fwd7ygbhk.css';
import '../../css/p/ph-mjcb4f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb4jxhscq"/><path class="jkq7-hbwz"/><path class="fwd7ygbhk"/><path class="ph-mjcb4f"/>`,
		"fallback": "openmoji:quebec-flag",
	});
}

export default Component;
