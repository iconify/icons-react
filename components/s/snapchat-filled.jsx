import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqtsj--xx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqtsj--xx"/>`,
		"fallback": "ant-design:snapchat-filled",
	});
}

export default Component;
