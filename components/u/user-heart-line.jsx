import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqgq31bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqgq31bqm"/>`,
		"fallback": "mingcute:user-heart-line",
	});
}

export default Component;
