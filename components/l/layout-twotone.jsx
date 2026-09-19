import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8_qb9bev.css';
import '../../css/c/cjf6f3gxf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8_qb9bev"/><path class="cjf6f3gxf"/>`,
		"fallback": "ant-design:layout-twotone",
	});
}

export default Component;
