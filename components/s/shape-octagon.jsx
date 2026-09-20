import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvytt_1zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvytt_1zm"/>`,
		"fallback": "mdi-light:shape-octagon",
	});
}

export default Component;
