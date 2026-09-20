import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp87u6c8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp87u6c8j"/>`,
		"fallback": "mdi:ray-start-arrow",
	});
}

export default Component;
