import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/v/vsn935b9w.css';
import '../../css/m/m0dfabbup.css';
import '../../css/p/p2y6c2b_r.css';
import '../../css/r/rq4zuv90f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="vsn935b9w"/><path class="m0dfabbup"/><path class="p2y6c2b_r"/><path class="rq4zuv90f"/></g>`,
		"fallback": "icon-park:message-one",
	});
}

export default Component;
