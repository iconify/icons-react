import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z5s_iw4ay.css';
import '../../css/q/qukbo802n.css';
import '../../css/a/ahh3l923f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z5s_iw4ay"/><path class="qukbo802n"/><path class="ahh3l923f"/></g>`,
		"fallback": "iconaut:tennis",
	});
}

export default Component;
