import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a_0c-vozs.css';
import '../../css/p/piit8wbjt.css';
import '../../css/v/vi7r50kxj.css';
import '../../css/l/ljeitrr-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a_0c-vozs"/><path class="piit8wbjt wm-s"/><path class="vi7r50kxj wm-s"/><path class="ljeitrr-k"/></g>`,
		"fallback": "withicons:user-heart-duo",
	});
}

export default Component;
