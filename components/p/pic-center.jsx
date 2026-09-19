import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-zt0ibhq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-zt0ibhq"/>`,
		"fallback": "ant-design:pic-center",
	});
}

export default Component;
