import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abm-7gbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abm-7gbxr"/>`,
		"fallback": "mdi:share",
	});
}

export default Component;
