import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtxx3f7-o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtxx3f7-o"/>`,
		"fallback": "ant-design:radius-upleft-outline",
	});
}

export default Component;
