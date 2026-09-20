import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uez0nrb7q.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uez0nrb7q"/>`,
		"fallback": "lineicons:t-shirt",
	});
}

export default Component;
