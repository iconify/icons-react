import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dszx4tb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dszx4tb5y"/>`,
		"fallback": "mingcute:miniplayer-line",
	});
}

export default Component;
