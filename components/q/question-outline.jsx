import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dke6q4bmo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dke6q4bmo"/>`,
		"fallback": "ant-design:question-outline",
	});
}

export default Component;
