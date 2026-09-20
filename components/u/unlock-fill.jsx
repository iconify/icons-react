import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kybc7u4rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kybc7u4rq"/>`,
		"fallback": "mingcute:unlock-fill",
	});
}

export default Component;
