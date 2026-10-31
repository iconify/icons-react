import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5g-q6bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5g-q6bcn"/>`,
		"fallback": "coolicons:server-fill-round",
	});
}

export default Component;
