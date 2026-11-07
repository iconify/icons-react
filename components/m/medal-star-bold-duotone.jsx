import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxalaab1z.css';
import '../../css/y/yxo0gabyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxalaab1z"/><path clip-rule="evenodd" class="yxo0gabyg"/>`,
		"fallback": "solar:medal-star-bold-duotone",
	});
}

export default Component;
