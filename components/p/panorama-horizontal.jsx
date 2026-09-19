import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5_ntkb_u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5_ntkb_u"/>`,
		"fallback": "icon-park-outline:panorama-horizontal",
	});
}

export default Component;
