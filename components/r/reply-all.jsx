import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wm5gb2b7r.css';
import '../../css/n/n9yd8kbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wm5gb2b7r"/><path class="n9yd8kbzk wm-a"/></g>`,
		"fallback": "withicons:reply-all",
	});
}

export default Component;
