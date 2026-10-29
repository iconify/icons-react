import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sq_jrmboe.css';
import '../../css/h/h8ktadizz.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/b/b33sfbyeh.css';
import '../../css/q/qxnk23bzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sq_jrmboe wm-deco"/><path class="h8ktadizz wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="b33sfbyeh wm-k"/><path class="qxnk23bzr wm-a"/></g>`,
		"fallback": "withicons:tree-pine-blueprint",
	});
}

export default Component;
