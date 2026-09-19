import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9x_81bmq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9x_81bmq"/>`,
		"fallback": "ant-design:loading-3-quarters-outline",
	});
}

export default Component;
