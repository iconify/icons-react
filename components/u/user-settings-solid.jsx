import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zk2rr16eb.css';
import '../../css/e/e05-53bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zk2rr16eb"/><path class="e05-53bqw"/></g>`,
		"fallback": "mynaui:user-settings-solid",
	});
}

export default Component;
