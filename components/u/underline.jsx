import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_9_k6c_s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_9_k6c_s"/>`,
		"fallback": "ant-design:underline",
	});
}

export default Component;
