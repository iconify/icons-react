import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t41rjyaqq.css';

const viewBox = {"width":432,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t41rjyaqq"/>`,
		"fallback": "zmdi:portable-wifi",
	});
}

export default Component;
