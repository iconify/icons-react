import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk5p8su9s.css';
import '../../css/m/mxptukb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary yk5p8su9s"/><path class="mxptukb2q primary"/>`,
		"fallback": "iconaut:trapezoid-duo",
	});
}

export default Component;
