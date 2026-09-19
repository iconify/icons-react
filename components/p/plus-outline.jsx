import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7k-jo7nm.css';
import '../../css/o/obxzrfd7q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7k-jo7nm"/><path class="obxzrfd7q"/>`,
		"fallback": "ant-design:plus-outline",
	});
}

export default Component;
