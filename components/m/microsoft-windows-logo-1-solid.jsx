import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5-v1l30e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d5-v1l30e"/>`,
		"fallback": "streamline-logos:microsoft-windows-logo-1-solid",
	});
}

export default Component;
