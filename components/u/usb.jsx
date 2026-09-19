import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eekymj8ao.css';

const viewBox = {"width":11,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eekymj8ao"/>`,
		"fallback": "fontisto:usb",
	});
}

export default Component;
