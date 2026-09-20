import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhw_mlbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhw_mlbqj"/>`,
		"fallback": "mingcute:open-door-fill",
	});
}

export default Component;
