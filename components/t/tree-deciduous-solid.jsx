import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9a3y55ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9a3y55ky"/>`,
		"fallback": "mynaui:tree-deciduous-solid",
	});
}

export default Component;
