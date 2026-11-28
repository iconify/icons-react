import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upq40fb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upq40fb1c"/>`,
		"fallback": "noviair-light:message-info",
	});
}

export default Component;
