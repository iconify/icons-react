import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de_v7eb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de_v7eb0n"/>`,
		"fallback": "coolicons:letter-n-fill-round",
	});
}

export default Component;
