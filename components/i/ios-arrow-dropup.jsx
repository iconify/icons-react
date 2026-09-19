import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc8rsybkr.css';
import '../../css/m/mabcrgb7q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc8rsybkr"/><path class="mabcrgb7q"/>`,
		"fallback": "ion:ios-arrow-dropup",
	});
}

export default Component;
