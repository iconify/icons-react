import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6jro9b_d.css';
import '../../css/x/x6xdhtlxk.css';
import '../../css/v/vtmirmbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6jro9b_d"/><path class="x6xdhtlxk"/><path class="vtmirmbnd"/></g>`,
		"fallback": "andrsrxn:sparkles",
	});
}

export default Component;
