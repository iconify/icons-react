import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fas1yfbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fas1yfbob"/>`,
		"fallback": "tabler:ironing-off",
	});
}

export default Component;
