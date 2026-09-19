import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk8c-26km.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk8c-26km"/>`,
		"fallback": "ant-design:small-dash",
	});
}

export default Component;
