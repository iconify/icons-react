import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgyiapyny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgyiapyny"/>`,
		"fallback": "simple-icons:swift",
	});
}

export default Component;
