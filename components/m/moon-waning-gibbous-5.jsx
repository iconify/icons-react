import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cecxi9b1i.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cecxi9b1i"/>`,
		"fallback": "wi:moon-waning-gibbous-5",
	});
}

export default Component;
