import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adswyhb5s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adswyhb5s"/>`,
		"fallback": "energy-icons:sun-48-bold",
	});
}

export default Component;
