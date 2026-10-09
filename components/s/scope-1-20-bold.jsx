import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc7985b_u.css';
import '../../css/s/sy7hkneln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc7985b_u"/><path class="sy7hkneln"/>`,
		"fallback": "energy-icons:scope-1-20-bold",
	});
}

export default Component;
