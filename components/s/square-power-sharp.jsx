import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aegt__b5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aegt__b5d"/>`,
		"fallback": "pixelarticons:square-power-sharp",
	});
}

export default Component;
