import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxdtobcxl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxdtobcxl"/>`,
		"fallback": "game-icons:lightning-flame",
	});
}

export default Component;
