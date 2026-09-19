import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv37jub_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv37jub_b"/>`,
		"fallback": "famicons:trophy",
	});
}

export default Component;
