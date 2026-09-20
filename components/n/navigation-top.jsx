import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2w2y2ajr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2w2y2ajr"/>`,
		"fallback": "tabler:navigation-top",
	});
}

export default Component;
