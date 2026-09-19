import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbos7x4cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nbos7x4cn"/>`,
		"fallback": "griddy-icons:server-pbx-alt-filled",
	});
}

export default Component;
