import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3td12bnt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3td12bnt"/>`,
		"fallback": "ant-design:minus-outline",
	});
}

export default Component;
