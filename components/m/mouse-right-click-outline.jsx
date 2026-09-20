import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn5qy_bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn5qy_bau"/>`,
		"fallback": "mdi:mouse-right-click-outline",
	});
}

export default Component;
