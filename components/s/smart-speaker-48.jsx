import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxwuhsbvz.css';
import '../../css/n/nif5jyb9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxwuhsbvz"/><path class="nif5jyb9e"/>`,
		"fallback": "energy-icons:smart-speaker-48",
	});
}

export default Component;
