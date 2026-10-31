import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz3h99bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz3h99bbd"/>`,
		"fallback": "coolicons:podcast-fill-round",
	});
}

export default Component;
