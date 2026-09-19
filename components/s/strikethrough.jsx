import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8l6k8asg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8l6k8asg"/>`,
		"fallback": "ant-design:strikethrough",
	});
}

export default Component;
