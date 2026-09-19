import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4p5sgccu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4p5sgccu"/>`,
		"fallback": "ant-design:qwen-filled",
	});
}

export default Component;
