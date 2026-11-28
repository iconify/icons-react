import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2j9rij4x.css';
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
		"content": `<path class="c2j9rij4x secondary"/><g class="dt0cm9dhy primary"><path class="ur93yjbpu"/><path class="wwbc-hbfx"/></g>`,
		"fallback": "iconaut:pyramid-duo",
	});
}

export default Component;
