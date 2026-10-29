import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
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
		"content": `<g class="dt0cm9dhy"><path class="b33sfbyeh"/><path class="qxnk23bzr wm-a"/></g>`,
		"fallback": "withicons:tree-pine",
	});
}

export default Component;
