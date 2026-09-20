import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws1ovebla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws1ovebla"/>`,
		"fallback": "streamline-cyber-color:link-broken-1",
	});
}

export default Component;
