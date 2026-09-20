import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jiz0deb-u.css';
import '../../css/a/ahl9e7t-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jiz0deb-u"/><path class="ahl9e7t-g"/></g>`,
		"fallback": "reicon:planet3-filled",
	});
}

export default Component;
