import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_7ekhr5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_7ekhr5p"/>`,
		"fallback": "coolicons:square-close-fill-round",
	});
}

export default Component;
