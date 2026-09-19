import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lalksfbhk.css';
import '../../css/c/cesl7tgnl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lalksfbhk"/><path class="cesl7tgnl"/>`,
		"fallback": "ion:ios-radio-button-on",
	});
}

export default Component;
