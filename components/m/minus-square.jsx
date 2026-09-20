import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3z_mu5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3z_mu5px"/>`,
		"fallback": "mynaui:minus-square",
	});
}

export default Component;
