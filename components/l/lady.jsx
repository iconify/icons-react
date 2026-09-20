import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q74bedcuw.css';
import '../../css/r/r7tnuz0-t.css';
import '../../css/p/p5tlt55wn.css';
import '../../css/l/lqxi5835c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q74bedcuw"/><path class="r7tnuz0-t"/><path class="p5tlt55wn"/><path class="lqxi5835c"/></g>`,
		"fallback": "streamline-cyber-color:lady",
	});
}

export default Component;
