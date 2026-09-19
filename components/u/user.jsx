import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq9u21biz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq9u21biz"/>`,
		"fallback": "ep:user",
	});
}

export default Component;
