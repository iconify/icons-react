import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5b6lh36g.css';
import '../../css/o/ou_tz5fwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s5b6lh36g"/><path class="ou_tz5fwd"/></g>`,
		"fallback": "reicon:volume-off-filled",
	});
}

export default Component;
