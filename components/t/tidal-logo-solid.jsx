import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqlt9f4ny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xqlt9f4ny"/>`,
		"fallback": "streamline-logos:tidal-logo-solid",
	});
}

export default Component;
