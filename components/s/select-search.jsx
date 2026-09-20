import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q911dnbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q911dnbkm"/>`,
		"fallback": "mdi:select-search",
	});
}

export default Component;
