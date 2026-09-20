import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvgy__y-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvgy__y-g"/>`,
		"fallback": "mynaui:minus-waves-solid",
	});
}

export default Component;
