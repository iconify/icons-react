import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u956u2x8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u956u2x8r"/>`,
		"fallback": "streamline-logos:microsoft-windows-logo-1-block",
	});
}

export default Component;
