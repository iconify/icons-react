import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly4d_7b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ly4d_7b5t"/>`,
		"fallback": "streamline-sharp:pin-1-remix",
	});
}

export default Component;
