import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sjvkn5w2h.css';
import '../../css/j/j79vh-b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sjvkn5w2h"/><path class="j79vh-b8k wm-a"/></g>`,
		"fallback": "withicons:rabbit",
	});
}

export default Component;
