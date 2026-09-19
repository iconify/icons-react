import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1i7d-1da.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1i7d-1da"/>`,
		"fallback": "ant-design:message-filled",
	});
}

export default Component;
