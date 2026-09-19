import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4wkg5yij.css';
import '../../css/n/nv5c7mbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4wkg5yij"/><path class="nv5c7mbim"/>`,
		"fallback": "fontisto:link",
	});
}

export default Component;
