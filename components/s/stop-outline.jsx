import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/i/imnimkbei.css';
import '../../css/z/zqzy3hb6e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="imnimkbei"/><path class="zqzy3hb6e"/></g>`,
		"fallback": "lsicon:stop-outline",
	});
}

export default Component;
