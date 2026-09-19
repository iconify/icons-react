import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar5b5-zjh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar5b5-zjh"/>`,
		"fallback": "ant-design:lock-fill",
	});
}

export default Component;
