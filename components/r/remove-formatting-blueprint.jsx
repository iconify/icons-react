import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/aygf7bbmo.css';
import '../../css/d/djt24lr8q.css';
import '../../css/b/bb31khzkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="aygf7bbmo wm-k"/><path class="djt24lr8q wm-k"/><path class="bb31khzkn wm-s"/></g>`,
		"fallback": "withicons:remove-formatting-blueprint",
	});
}

export default Component;
