import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/go3vulb-s.css';
import '../../css/g/gy5vykbhv.css';
import '../../css/j/j6o9z6big.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="go3vulb-s"/><path class="gy5vykbhv"/><path class="j6o9z6big"/></g>`,
		"fallback": "iconaut:signal-medium-duo",
	});
}

export default Component;
