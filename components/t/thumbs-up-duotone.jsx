import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2092qjgt.css';
import '../../css/w/wq7yijbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a2092qjgt"/><path class="wq7yijbub"/></g>`,
		"fallback": "keyline-icons:thumbs-up-duotone",
	});
}

export default Component;
