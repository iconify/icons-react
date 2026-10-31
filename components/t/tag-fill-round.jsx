import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le5ojcc3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le5ojcc3w"/>`,
		"fallback": "coolicons:tag-fill-round",
	});
}

export default Component;
