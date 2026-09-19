import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr8vvebed.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr8vvebed"/>`,
		"fallback": "ant-design:line",
	});
}

export default Component;
