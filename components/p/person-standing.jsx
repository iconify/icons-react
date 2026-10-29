import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b5jcl5blk.css';
import '../../css/x/xk6eoibzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b5jcl5blk"/><path class="wm-a xk6eoibzj"/></g>`,
		"fallback": "withicons:person-standing",
	});
}

export default Component;
