import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu4izou2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu4izou2j"/>`,
		"fallback": "energy-icons:users-48",
	});
}

export default Component;
