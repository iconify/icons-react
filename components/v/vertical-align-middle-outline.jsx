import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xudfxxb1z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xudfxxb1z"/>`,
		"fallback": "ant-design:vertical-align-middle-outline",
	});
}

export default Component;
