import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-mj0x9-x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-mj0x9-x"/>`,
		"fallback": "oui:paper-clip",
	});
}

export default Component;
