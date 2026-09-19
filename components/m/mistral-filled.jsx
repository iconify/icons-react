import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd57gbbou.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd57gbbou"/>`,
		"fallback": "ant-design:mistral-filled",
	});
}

export default Component;
