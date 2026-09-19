import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivh42bn2r.css';

const viewBox = {"width":344,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivh42bn2r"/>`,
		"fallback": "zmdi:refresh-sync",
	});
}

export default Component;
