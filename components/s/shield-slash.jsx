import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5lgu_8hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5lgu_8hx"/>`,
		"fallback": "reicon:shield-slash",
	});
}

export default Component;
