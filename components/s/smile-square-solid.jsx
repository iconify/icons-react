import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfdry5kvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfdry5kvn"/>`,
		"fallback": "mynaui:smile-square-solid",
	});
}

export default Component;
