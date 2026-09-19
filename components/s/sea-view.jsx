import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxon0y14n.css';
import '../../css/u/uwoztrbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxon0y14n"/><path class="uwoztrbrc"/>`,
		"fallback": "boxicons:sea-view",
	});
}

export default Component;
