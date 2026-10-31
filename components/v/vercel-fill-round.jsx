import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwaq4lb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwaq4lb1r"/>`,
		"fallback": "coolicons:vercel-fill-round",
	});
}

export default Component;
