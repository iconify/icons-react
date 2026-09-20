import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng-o3gbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng-o3gbos"/>`,
		"fallback": "mynaui:user",
	});
}

export default Component;
