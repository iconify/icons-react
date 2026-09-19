import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy6ce7bis.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy6ce7bis"/>`,
		"fallback": "whh:powerplug",
	});
}

export default Component;
