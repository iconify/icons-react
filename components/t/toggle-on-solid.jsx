import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g22774ouw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g22774ouw"/>`,
		"fallback": "basil:toggle-on-solid",
	});
}

export default Component;
