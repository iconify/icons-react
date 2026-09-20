import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ixgv0acgn.css';
import '../../css/n/nxt9p5nsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ixgv0acgn"/><path clip-rule="evenodd" class="nxt9p5nsh"/></g>`,
		"fallback": "reicon:language",
	});
}

export default Component;
