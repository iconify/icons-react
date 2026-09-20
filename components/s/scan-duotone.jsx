import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kobx8zbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kobx8zbbe"/>`,
		"fallback": "keyline-icons:scan-duotone",
	});
}

export default Component;
