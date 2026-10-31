import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5x_c4b3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5x_c4b3m"/>`,
		"fallback": "withicons:stroller-gloss",
	});
}

export default Component;
