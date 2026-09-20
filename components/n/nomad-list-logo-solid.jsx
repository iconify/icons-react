import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw9g_xb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mw9g_xb-h"/>`,
		"fallback": "streamline-logos:nomad-list-logo-solid",
	});
}

export default Component;
