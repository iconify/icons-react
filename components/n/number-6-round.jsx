import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sek5qrbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sek5qrbnh"/>`,
		"fallback": "coolicons:number-6-round",
	});
}

export default Component;
