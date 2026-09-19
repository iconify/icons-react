import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_-dtwbzj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_-dtwbzj"/>`,
		"fallback": "ant-design:issues-close-outline",
	});
}

export default Component;
