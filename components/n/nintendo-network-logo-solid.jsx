import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r16s67ibb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r16s67ibb"/>`,
		"fallback": "streamline-logos:nintendo-network-logo-solid",
	});
}

export default Component;
