import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypb-jhynf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypb-jhynf"/>`,
		"fallback": "ri:ship-2-line",
	});
}

export default Component;
