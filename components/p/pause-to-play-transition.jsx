import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb4hln.css';
import '../../css/d/d-d0cg1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb4hln"/>`,
		"fallback": "line-md:pause-to-play-transition",
	});
}

export default Component;
