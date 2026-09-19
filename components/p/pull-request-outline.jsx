import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5r0keu5q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5r0keu5q"/>`,
		"fallback": "ant-design:pull-request-outline",
	});
}

export default Component;
