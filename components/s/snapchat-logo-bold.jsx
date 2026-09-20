import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvu0c9bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvu0c9bic"/>`,
		"fallback": "streamline-ultimate:snapchat-logo-bold",
	});
}

export default Component;
