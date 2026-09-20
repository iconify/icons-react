import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb201_2ct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb201_2ct"/>`,
		"fallback": "ix:ipcs",
	});
}

export default Component;
