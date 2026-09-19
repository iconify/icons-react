import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_-v0ubcp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_-v0ubcp"/>`,
		"fallback": "ant-design:pause-circle",
	});
}

export default Component;
