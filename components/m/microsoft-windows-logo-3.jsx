import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbd3abb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbd3abb2h"/>`,
		"fallback": "streamline-logos:microsoft-windows-logo-3",
	});
}

export default Component;
