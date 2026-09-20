import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx3490c6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mx3490c6s"/>`,
		"fallback": "streamline-ultimate:vpn-shield-bold",
	});
}

export default Component;
