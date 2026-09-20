import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_b4n-yhc.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/a5uwe6b_p.css';
import '../../css/s/s9-53e3xp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_b4n-yhc"/><g class="jn8qy4bru"><path class="a5uwe6b_p"/><path class="s9-53e3xp"/></g>`,
		"fallback": "openmoji:love-you-gesture",
	});
}

export default Component;
