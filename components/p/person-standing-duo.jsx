import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q9h9q57wp.css';
import '../../css/x/xk6eoibzj.css';
import '../../css/b/b5jcl5blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q9h9q57wp"/><path class="wm-a xk6eoibzj"/><path class="b5jcl5blk"/></g>`,
		"fallback": "withicons:person-standing-duo",
	});
}

export default Component;
