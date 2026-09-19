import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz8krbcge.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz8krbcge"/>`,
		"fallback": "ant-design:linkedin-fill",
	});
}

export default Component;
