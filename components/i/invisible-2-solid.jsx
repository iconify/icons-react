import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9uj-ij0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v9uj-ij0h"/>`,
		"fallback": "streamline-sharp:invisible-2-solid",
	});
}

export default Component;
