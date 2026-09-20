import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8z10m13t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8z10m13t"/>`,
		"fallback": "pixelarticons:scissors-sharp",
	});
}

export default Component;
