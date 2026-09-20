import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyda63bkq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyda63bkq"/>`,
		"fallback": "zondicons:keyboard",
	});
}

export default Component;
