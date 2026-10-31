import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld_j4fb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld_j4fb0k"/>`,
		"fallback": "coolicons:watch-round",
	});
}

export default Component;
