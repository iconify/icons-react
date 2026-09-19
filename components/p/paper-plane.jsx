import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ios-7vb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ios-7vb5y"/>`,
		"fallback": "fontisto:paper-plane",
	});
}

export default Component;
