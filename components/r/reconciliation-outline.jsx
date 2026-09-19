import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtgrmkj5g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtgrmkj5g"/>`,
		"fallback": "ant-design:reconciliation-outline",
	});
}

export default Component;
