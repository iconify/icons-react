import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a929an8zc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a929an8zc"/>`,
		"fallback": "ant-design:left-circle-fill",
	});
}

export default Component;
