import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq0eo_b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq0eo_b6c"/>`,
		"fallback": "pixelarticons:letter-c-circle",
	});
}

export default Component;
