import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obg18lb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obg18lb6i"/>`,
		"fallback": "mdi:view-in-ar",
	});
}

export default Component;
