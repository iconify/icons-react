import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzhm1sb_r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzhm1sb_r"/>`,
		"fallback": "ant-design:pause-circle-filled",
	});
}

export default Component;
