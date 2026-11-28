import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ur93yjbpu.css';
import '../../css/w/wwbc-hbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ur93yjbpu"/><path class="wwbc-hbfx"/></g>`,
		"fallback": "iconaut:pyramid",
	});
}

export default Component;
