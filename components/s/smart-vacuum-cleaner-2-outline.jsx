import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll5fo4b3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ll5fo4b3l"/>`,
		"fallback": "solar:smart-vacuum-cleaner-2-outline",
	});
}

export default Component;
