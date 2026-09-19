import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/ug3uwbbfx.css';
import '../../css/i/iw32g0-1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ug3uwbbfx"/><path class="iw32g0-1t"/></g>`,
		"fallback": "hugeicons:pencil-edit-02",
	});
}

export default Component;
