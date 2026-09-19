import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxy1yxb_d.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxy1yxb_d"/>`,
		"fallback": "foundation:social-android",
	});
}

export default Component;
