import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt7s3r6xk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt7s3r6xk"/>`,
		"fallback": "ant-design:tool",
	});
}

export default Component;
