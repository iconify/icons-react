import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei5vwb4va.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei5vwb4va"/>`,
		"fallback": "zondicons:upload",
	});
}

export default Component;
