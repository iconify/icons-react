import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/movjw89ew.css';
import '../../css/a/ax9g9_14z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="movjw89ew"/><path class="ax9g9_14z"/>`,
		"fallback": "solar:login-bold",
	});
}

export default Component;
