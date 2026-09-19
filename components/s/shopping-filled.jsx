import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtyf1vuiz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtyf1vuiz"/>`,
		"fallback": "ant-design:shopping-filled",
	});
}

export default Component;
