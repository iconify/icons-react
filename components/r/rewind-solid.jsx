import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/relpaxxvm.css';
import '../../css/o/o1kfnuz9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="relpaxxvm"/><path class="o1kfnuz9a"/></g>`,
		"fallback": "mynaui:rewind-solid",
	});
}

export default Component;
