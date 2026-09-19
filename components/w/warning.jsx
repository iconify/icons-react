import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h64cczbbq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h64cczbbq"/>`,
		"fallback": "ant-design:warning",
	});
}

export default Component;
