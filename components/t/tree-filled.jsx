import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/og7bygb6q.css';
import '../../css/z/z6gpp2b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="og7bygb6q"/><path class="z6gpp2b7d"/></g>`,
		"fallback": "reicon:tree-filled",
	});
}

export default Component;
