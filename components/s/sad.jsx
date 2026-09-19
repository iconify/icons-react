import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8_enolvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8_enolvx"/>`,
		"fallback": "ion:sad",
	});
}

export default Component;
