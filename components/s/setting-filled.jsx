import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn9d0ybci.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn9d0ybci"/>`,
		"fallback": "ant-design:setting-filled",
	});
}

export default Component;
