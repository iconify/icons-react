import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj8g_sb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj8g_sb5g"/>`,
		"fallback": "humbleicons:remote",
	});
}

export default Component;
