import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4edq5b_q.css';
import '../../css/l/lalksfbhk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4edq5b_q"/><path class="lalksfbhk"/>`,
		"fallback": "ion:ios-add-circle-outline",
	});
}

export default Component;
