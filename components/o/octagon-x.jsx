import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/reu6pobru.css';
import '../../css/d/d0ebidbyd.css';
import '../../css/d/dfc389afp.css';
import '../../css/r/r4_x6cbis.css';
import '../../css/r/rx439jj7u.css';
import '../../css/i/i-uh03bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="reu6pobru wm-shadow"/><path class="d0ebidbyd"/><path class="dfc389afp"/><path class="r4_x6cbis"/><path class="rx439jj7u"/><path class="i-uh03bbp"/></g>`,
		"fallback": "withicons-retro:octagon-x",
	});
}

export default Component;
