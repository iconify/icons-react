import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wyoh9_s6k.css';
import '../../css/v/v1qt5dbep.css';
import '../../css/z/zdkc4gb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="wyoh9_s6k"/><path class="v1qt5dbep"/><path class="zdkc4gb2c"/></g>`,
		"fallback": "hugeicons:search-alert",
	});
}

export default Component;
