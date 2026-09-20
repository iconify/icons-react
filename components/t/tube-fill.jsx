import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy8j3sb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy8j3sb9m"/>`,
		"fallback": "mage:tube-fill",
	});
}

export default Component;
