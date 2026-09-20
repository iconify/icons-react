import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wllrp9urp.css';
import '../../css/c/czs93-zxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wllrp9urp"/><path class="czs93-zxq"/>`,
		"fallback": "mingcute:statue-of-liberty-line",
	});
}

export default Component;
