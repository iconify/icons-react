import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uspo93buh.css';
import '../../css/q/qxnk23bzr.css';
import '../../css/b/b33sfbyeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uspo93buh"/><path class="qxnk23bzr wm-a"/><path class="b33sfbyeh"/></g>`,
		"fallback": "withicons:tree-pine-duo",
	});
}

export default Component;
