import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy_lx-scp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy_lx-scp"/>`,
		"fallback": "ant-design:swap-right",
	});
}

export default Component;
