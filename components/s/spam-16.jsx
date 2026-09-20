import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk-vv_b6c.css';
import '../../css/d/d4i5-t89q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk-vv_b6c"/><path clip-rule="evenodd" class="d4i5-t89q"/>`,
		"fallback": "qlementine-icons:spam-16",
	});
}

export default Component;
