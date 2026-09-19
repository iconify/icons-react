import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j48_gdb0c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j48_gdb0c"/>`,
		"fallback": "ant-design:security-scan-fill",
	});
}

export default Component;
