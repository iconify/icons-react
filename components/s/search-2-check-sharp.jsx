import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5urce02d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5urce02d"/>`,
		"fallback": "keyline-icons:search-2-check-sharp",
	});
}

export default Component;
