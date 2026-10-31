import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gg1g3y5ku.css';
import '../../css/w/wh8iajodi.css';
import '../../css/b/b2u36291q.css';
import '../../css/x/x1hbkvb3f.css';
import '../../css/x/xxz0w8l-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gg1g3y5ku wm-k"/><path class="wh8iajodi wm-deco"/><path class="b2u36291q wm-k"/><path class="wm-k x1hbkvb3f"/><path class="wm-shadow xxz0w8l-c"/></g>`,
		"fallback": "withicons-valentine:warehouse",
	});
}

export default Component;
