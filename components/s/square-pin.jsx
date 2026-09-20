import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6r8g0bbk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6r8g0bbk"/>`,
		"fallback": "map:square-pin",
	});
}

export default Component;
