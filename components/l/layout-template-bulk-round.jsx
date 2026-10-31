import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jcjgzh1ki.css';
import '../../css/x/xituel23w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jcjgzh1ki"/><path class="xituel23w"/></g>`,
		"fallback": "coolicons:layout-template-bulk-round",
	});
}

export default Component;
