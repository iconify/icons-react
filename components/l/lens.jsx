import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcxmw9bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcxmw9bdm"/>`,
		"fallback": "thesvg-color:lens",
	});
}

export default Component;
