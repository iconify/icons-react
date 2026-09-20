import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh6uh2v6d.css';
import '../../css/q/qervu7tht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xh6uh2v6d"/><path class="qervu7tht"/></g>`,
		"fallback": "tdesign:opera",
	});
}

export default Component;
