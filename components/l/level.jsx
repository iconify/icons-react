import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lud3zjb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lud3zjb_q"/>`,
		"fallback": "noviair:level",
	});
}

export default Component;
