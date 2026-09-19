import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8cmkxbuc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8cmkxbuc"/>`,
		"fallback": "ant-design:linux-outlined",
	});
}

export default Component;
