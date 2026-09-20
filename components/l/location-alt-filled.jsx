import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcfxl0b5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcfxl0b5c"/>`,
		"fallback": "reicon:location-alt-filled",
	});
}

export default Component;
