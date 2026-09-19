import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpn4uz37n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpn4uz37n"/>`,
		"fallback": "iconamoon:sign-plus-square",
	});
}

export default Component;
