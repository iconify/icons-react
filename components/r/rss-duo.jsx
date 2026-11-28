import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yv4o3c3fe.css';
import '../../css/z/zrlq-ko1s.css';
import '../../css/e/em4jlpe0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yv4o3c3fe"/><path class="zrlq-ko1s"/><path class="em4jlpe0l"/></g>`,
		"fallback": "iconaut:rss-duo",
	});
}

export default Component;
