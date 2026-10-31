import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6bfvbm-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6bfvbm-x"/>`,
		"fallback": "coolicons:ruler-fill-round",
	});
}

export default Component;
