import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd9kdwhel.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd9kdwhel"/>`,
		"fallback": "ant-design:left-square-fill",
	});
}

export default Component;
