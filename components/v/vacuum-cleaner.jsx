import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rygkx9byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rygkx9byj"/>`,
		"fallback": "mdi:vacuum-cleaner",
	});
}

export default Component;
