import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgdc7hbhx.css';
import '../../css/i/ik-9ob1vk.css';
import '../../css/f/ffeeo3bqd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bgdc7hbhx"/><path class="ik-9ob1vk"/><path clip-rule="evenodd" class="ffeeo3bqd"/></g>`,
		"fallback": "streamline-color:mouse-flat",
	});
}

export default Component;
