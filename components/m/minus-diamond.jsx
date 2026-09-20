import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg7r_suvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg7r_suvc"/>`,
		"fallback": "mynaui:minus-diamond",
	});
}

export default Component;
