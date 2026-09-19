import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhdlv3rcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhdlv3rcz"/>`,
		"fallback": "flowbite:magic-wand-outline",
	});
}

export default Component;
