import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8-rrpbya.css';
import '../../css/z/z7_tv0bli.css';
import '../../css/j/ja3silbpz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8-rrpbya"/><path class="z7_tv0bli"/><path class="ja3silbpz"/>`,
		"fallback": "fxemoji:nailpolish",
	});
}

export default Component;
