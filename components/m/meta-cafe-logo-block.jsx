import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2lc4yp1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w2lc4yp1y"/>`,
		"fallback": "streamline-logos:meta-cafe-logo-block",
	});
}

export default Component;
