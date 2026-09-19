import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3iqr-btu.css';
import '../../css/l/lalksfbhk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3iqr-btu"/><path class="lalksfbhk"/>`,
		"fallback": "ion:ios-close-circle-outline",
	});
}

export default Component;
