import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzbn69b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzbn69b3o"/>`,
		"fallback": "coolicons:letter-s-bulk-round",
	});
}

export default Component;
