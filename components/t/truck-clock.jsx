import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmhhk40sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmhhk40sw"/>`,
		"fallback": "noviair-light:truck-clock",
	});
}

export default Component;
