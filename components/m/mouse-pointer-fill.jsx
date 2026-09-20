import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mytq8j2nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mytq8j2nt"/>`,
		"fallback": "mage:mouse-pointer-fill",
	});
}

export default Component;
