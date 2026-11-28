import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ysbubg1kd.css';
import '../../css/t/t80vk__1t.css';
import '../../css/j/jboqyrtbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ysbubg1kd"/><path class="t80vk__1t"/><path class="jboqyrtbu"/></g>`,
		"fallback": "iconaut:speaker",
	});
}

export default Component;
