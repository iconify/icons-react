import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l2ot3yb9x.css';
import '../../css/w/wqrhc5bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="l2ot3yb9x"/><path class="wqrhc5bwc"/></g>`,
		"fallback": "iconamoon:sign-factorial-thin",
	});
}

export default Component;
