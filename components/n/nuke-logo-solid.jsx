import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aehpp3bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aehpp3bfi"/>`,
		"fallback": "streamline-logos:nuke-logo-solid",
	});
}

export default Component;
