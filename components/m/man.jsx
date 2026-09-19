import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0lxhccly.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0lxhccly"/>`,
		"fallback": "healthicons:man",
	});
}

export default Component;
