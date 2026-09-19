import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmfk8e0td.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmfk8e0td"/>`,
		"fallback": "dinkie-icons:tiktok-small",
	});
}

export default Component;
