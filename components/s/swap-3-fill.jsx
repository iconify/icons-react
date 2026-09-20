import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yka21ub2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yka21ub2w"/>`,
		"fallback": "ri:swap-3-fill",
	});
}

export default Component;
