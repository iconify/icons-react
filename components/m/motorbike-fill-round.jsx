import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n31ha_blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n31ha_blt"/>`,
		"fallback": "coolicons:motorbike-fill-round",
	});
}

export default Component;
