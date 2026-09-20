import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwo5t8b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwo5t8b8f"/>`,
		"fallback": "pixelarticons:movie",
	});
}

export default Component;
