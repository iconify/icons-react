import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xou0auhqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xou0auhqd"/>`,
		"fallback": "humbleicons:phone-forward",
	});
}

export default Component;
