import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp_jgrb3z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp_jgrb3z"/>`,
		"fallback": "ant-design:sort-ascending-outlined",
	});
}

export default Component;
