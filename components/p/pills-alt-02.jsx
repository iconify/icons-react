import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yz8j4n7jd.css';
import '../../css/s/sk-vk5btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yz8j4n7jd"/><path clip-rule="evenodd" class="sk-vk5btx"/></g>`,
		"fallback": "griddy-icons:pills-alt-02",
	});
}

export default Component;
