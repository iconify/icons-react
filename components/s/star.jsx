import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqep6zwwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqep6zwwi"/>`,
		"fallback": "meteor-icons:star",
	});
}

export default Component;
