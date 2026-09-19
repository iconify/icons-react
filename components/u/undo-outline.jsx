import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtac5svox.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtac5svox"/>`,
		"fallback": "ant-design:undo-outline",
	});
}

export default Component;
