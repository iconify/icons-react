import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7u1zqfvf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7u1zqfvf"/>`,
		"fallback": "ant-design:trophy-fill",
	});
}

export default Component;
