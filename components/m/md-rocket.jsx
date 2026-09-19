import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqmaimblk.css';
import '../../css/j/j7wys6bic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqmaimblk"/><path class="j7wys6bic"/>`,
		"fallback": "ion:md-rocket",
	});
}

export default Component;
