import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z74kumn2b.css';
import '../../css/j/jwu00s_8x.css';
import '../../css/w/w249edbbv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z74kumn2b"/><path class="jwu00s_8x"/><circle class="w249edbbv"/>`,
		"fallback": "fxemoji:jeans",
	});
}

export default Component;
