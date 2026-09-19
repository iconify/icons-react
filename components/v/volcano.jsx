import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puqv6iltn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puqv6iltn"/>`,
		"fallback": "fa6-solid:volcano",
	});
}

export default Component;
