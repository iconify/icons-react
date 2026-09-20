import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntcvex3pb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntcvex3pb"/>`,
		"fallback": "ri:vip-crown-line",
	});
}

export default Component;
