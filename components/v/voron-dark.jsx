import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usl5inb0a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usl5inb0a"/>`,
		"fallback": "selfhst:voron-dark",
	});
}

export default Component;
