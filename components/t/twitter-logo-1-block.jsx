import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnm9e3w-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cnm9e3w-b"/>`,
		"fallback": "streamline-logos:twitter-logo-1-block",
	});
}

export default Component;
