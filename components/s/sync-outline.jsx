import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd5rp1b_c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd5rp1b_c"/>`,
		"fallback": "ant-design:sync-outline",
	});
}

export default Component;
