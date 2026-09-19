import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhw5u9d6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhw5u9d6z"/>`,
		"fallback": "iconoir:pen-connect-wifi",
	});
}

export default Component;
