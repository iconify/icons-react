import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pr4hfob0i.css';
import '../../css/n/ndggxmqsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pr4hfob0i"/><path class="ndggxmqsd wm-a"/></g>`,
		"fallback": "withicons:luggage",
	});
}

export default Component;
