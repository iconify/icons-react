import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4zw4yxvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4zw4yxvs"/>`,
		"fallback": "ri:rotate-lock-fill",
	});
}

export default Component;
