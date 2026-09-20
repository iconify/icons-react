import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/us534x3fe.css';
import '../../css/u/uvezkteld.css';
import '../../css/y/ysok_0bql.css';
import '../../css/n/nw--i5q4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="us534x3fe"/><path class="uvezkteld"/><path class="ysok_0bql"/><path class="nw--i5q4i"/></g>`,
		"fallback": "streamline-ultimate-color:screen-1",
	});
}

export default Component;
