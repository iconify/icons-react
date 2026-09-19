import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd5kx9nig.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd5kx9nig"/>`,
		"fallback": "ant-design:taobao-circle-outline",
	});
}

export default Component;
