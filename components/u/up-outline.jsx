import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/attc-db7q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="attc-db7q"/>`,
		"fallback": "ant-design:up-outline",
	});
}

export default Component;
