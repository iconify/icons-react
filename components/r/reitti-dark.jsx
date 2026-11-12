import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdt8x3_lk.css';
import '../../css/y/yurfh5b_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdt8x3_lk"/><path class="yurfh5b_h"/>`,
		"fallback": "selfhst:reitti-dark",
	});
}

export default Component;
