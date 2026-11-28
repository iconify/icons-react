import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/utlijrqan.css';
import '../../css/b/bgi74ebme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="utlijrqan"/><path class="bgi74ebme"/></g>`,
		"fallback": "iconaut:iteration-cw-duo",
	});
}

export default Component;
