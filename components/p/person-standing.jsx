import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y2vw-xvoy.css';
import '../../css/b/b5jcl5blk.css';
import '../../css/x/xk6eoibzj.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="y2vw-xvoy"/><path class="b5jcl5blk wm-k"/><path class="wm-a xk6eoibzj"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:person-standing",
	});
}

export default Component;
