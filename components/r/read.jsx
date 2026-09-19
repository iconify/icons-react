import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lef8gbbzn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lef8gbbzn"/>`,
		"fallback": "ant-design:read",
	});
}

export default Component;
