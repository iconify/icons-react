import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux1eiccpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux1eiccpn"/>`,
		"fallback": "mynaui:pause-waves-solid",
	});
}

export default Component;
