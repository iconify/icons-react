import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhnm5fbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhnm5fbti"/>`,
		"fallback": "mdi:truck-flatbed",
	});
}

export default Component;
