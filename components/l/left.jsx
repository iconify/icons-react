import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-t05dcer.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-t05dcer"/>`,
		"fallback": "ant-design:left",
	});
}

export default Component;
