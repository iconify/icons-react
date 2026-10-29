import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bou945bat.css';
import '../../css/h/hqlqb8bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bou945bat"/><path class="hqlqb8bfm wm-a"/></g>`,
		"fallback": "withicons:trees",
	});
}

export default Component;
