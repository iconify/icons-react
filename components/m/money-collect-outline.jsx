import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omviflb8g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omviflb8g"/>`,
		"fallback": "ant-design:money-collect-outline",
	});
}

export default Component;
