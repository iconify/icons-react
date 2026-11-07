import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vipk1m54q.css';
import '../../css/l/lbzbb7bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vipk1m54q"/><path class="lbzbb7bkq"/>`,
		"fallback": "solar:oven-mitts-bold",
	});
}

export default Component;
