import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqfz1qjfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqfz1qjfa"/>`,
		"fallback": "coolicons:warehouse-fill-round",
	});
}

export default Component;
