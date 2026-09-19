import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu2idxbkq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu2idxbkq"/>`,
		"fallback": "icomoon-free:table",
	});
}

export default Component;
