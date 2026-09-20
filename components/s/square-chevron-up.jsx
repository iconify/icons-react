import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otfa01r4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otfa01r4d"/>`,
		"fallback": "pixelarticons:square-chevron-up",
	});
}

export default Component;
