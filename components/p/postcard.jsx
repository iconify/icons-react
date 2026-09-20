import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moygi0x4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moygi0x4t"/>`,
		"fallback": "uil:postcard",
	});
}

export default Component;
