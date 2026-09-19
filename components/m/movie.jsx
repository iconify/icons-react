import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv1jkn-1h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv1jkn-1h"/>`,
		"fallback": "cil:movie",
	});
}

export default Component;
