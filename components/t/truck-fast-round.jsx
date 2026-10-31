import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-fkjp1yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-fkjp1yx"/>`,
		"fallback": "coolicons:truck-fast-round",
	});
}

export default Component;
