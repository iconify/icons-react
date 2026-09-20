import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp44u9h7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp44u9h7e"/>`,
		"fallback": "ri:twitter-fill",
	});
}

export default Component;
