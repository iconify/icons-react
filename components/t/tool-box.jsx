import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/o/og7xrbchw.css';
import '../../css/v/vx3zsq8cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="og7xrbchw"/><path class="vx3zsq8cd"/></g>`,
		"fallback": "streamline-sharp-color:tool-box",
	});
}

export default Component;
