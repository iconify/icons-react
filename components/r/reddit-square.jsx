import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2_6f6b7n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2_6f6b7n"/>`,
		"fallback": "ant-design:reddit-square",
	});
}

export default Component;
