import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/aedlnnets.css';
import '../../css/c/czjj17bjy.css';
import '../../css/j/j3u2o5jmd.css';
import '../../css/f/fc3pzvb-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="aedlnnets"/><path class="czjj17bjy wm-a"/><circle class="j3u2o5jmd wm-a"/><path class="fc3pzvb-o wm-a"/></g>`,
		"fallback": "withicons:salad",
	});
}

export default Component;
