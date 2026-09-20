import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klya34bbq.css';

const viewBox = {"width":65,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klya34bbq"/>`,
		"fallback": "lineicons:meta-2",
	});
}

export default Component;
