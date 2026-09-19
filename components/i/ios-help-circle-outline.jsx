import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lalksfbhk.css';
import '../../css/c/cx4edcbme.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lalksfbhk"/><path class="cx4edcbme"/>`,
		"fallback": "ion:ios-help-circle-outline",
	});
}

export default Component;
