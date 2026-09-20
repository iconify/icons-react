import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-y-wm.css';
import '../../css/d/d-d0cg1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-y-wm"/>`,
		"fallback": "line-md:pause-to-play-filled-transition",
	});
}

export default Component;
