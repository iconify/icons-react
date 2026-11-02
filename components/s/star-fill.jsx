import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq093ebwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq093ebwq"/>`,
		"fallback": "mingcute:star-fill",
	});
}

export default Component;
