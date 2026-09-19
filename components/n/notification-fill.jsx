import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya9h86b_d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya9h86b_d"/>`,
		"fallback": "ant-design:notification-fill",
	});
}

export default Component;
