import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufq81rb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ufq81rb0c"/>`,
		"fallback": "solar:rounded-magnifier-zoom-out-outline",
	});
}

export default Component;
