import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztc5-tz0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ztc5-tz0i"/>`,
		"fallback": "griddy-icons:key-off-filled",
	});
}

export default Component;
