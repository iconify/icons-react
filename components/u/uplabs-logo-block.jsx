import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr1v6lfce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yr1v6lfce"/>`,
		"fallback": "streamline-logos:uplabs-logo-block",
	});
}

export default Component;
