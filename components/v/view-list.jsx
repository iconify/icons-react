import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lasvxn6gs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lasvxn6gs"/>`,
		"fallback": "zondicons:view-list",
	});
}

export default Component;
