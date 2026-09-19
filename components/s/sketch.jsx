import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t80i2zb6b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t80i2zb6b"/>`,
		"fallback": "ant-design:sketch",
	});
}

export default Component;
