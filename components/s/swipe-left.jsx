import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5_u22bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5_u22bhj"/>`,
		"fallback": "tabler:swipe-left",
	});
}

export default Component;
