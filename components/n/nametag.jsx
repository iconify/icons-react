import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adu8xte9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adu8xte9r"/>`,
		"fallback": "gridicons:nametag",
	});
}

export default Component;
