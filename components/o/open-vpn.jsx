import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glon_br_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glon_br_s"/>`,
		"fallback": "iconoir:open-vpn",
	});
}

export default Component;
