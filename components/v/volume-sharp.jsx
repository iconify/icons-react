import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6417gyjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6417gyjx"/>`,
		"fallback": "keyline-icons:volume-sharp",
	});
}

export default Component;
