import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fro30fydk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fro30fydk"/>`,
		"fallback": "streamline-logos:loom-logo",
	});
}

export default Component;
