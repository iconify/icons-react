import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oynqdsb-h.css';

const viewBox = {"width":256,"height":368};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oynqdsb-h"/>`,
		"fallback": "thesvg-color:stackblitz",
	});
}

export default Component;
