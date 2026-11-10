import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ylacquqwe.css';
import '../../css/b/b6ogh3b9q.css';
import '../../css/s/sy3h8ftow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ylacquqwe"/><path class="b6ogh3b9q"/><path class="sy3h8ftow"/></g>`,
		"fallback": "andrsrxn:user-background-dashed",
	});
}

export default Component;
