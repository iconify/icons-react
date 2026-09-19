import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh9t6fjqh.css';
import '../../css/g/g_wd5geuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh9t6fjqh"/><path clip-rule="evenodd" class="g_wd5geuf"/>`,
		"fallback": "basil:shopping-basket-solid",
	});
}

export default Component;
