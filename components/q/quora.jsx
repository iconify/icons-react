import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt18aubkp.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt18aubkp"/>`,
		"fallback": "whh:quora",
	});
}

export default Component;
