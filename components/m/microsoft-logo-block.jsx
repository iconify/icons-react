import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8fiii89q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a8fiii89q"/>`,
		"fallback": "streamline-logos:microsoft-logo-block",
	});
}

export default Component;
