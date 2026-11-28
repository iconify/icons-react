import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkz6nxcig.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkz6nxcig"/>`,
		"fallback": "pullo:sidebar-simple-bottom-light",
	});
}

export default Component;
