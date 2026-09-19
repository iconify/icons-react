import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8tuk2fcm.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8tuk2fcm"/>`,
		"fallback": "dinkie-icons:keycap-windows-small",
	});
}

export default Component;
