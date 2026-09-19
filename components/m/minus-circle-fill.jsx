import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eerz48b5q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eerz48b5q"/>`,
		"fallback": "ant-design:minus-circle-fill",
	});
}

export default Component;
