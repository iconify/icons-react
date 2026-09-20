import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esrqwyb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="esrqwyb7z"/>`,
		"fallback": "keyline-icons:map-pin-heart-sharp-fill",
	});
}

export default Component;
