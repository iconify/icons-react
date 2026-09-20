import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjx9i3gfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tjx9i3gfk"/>`,
		"fallback": "streamline-logos:microsoft-azure-logo-block",
	});
}

export default Component;
