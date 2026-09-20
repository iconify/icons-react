import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjspl9w7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjspl9w7n"/>`,
		"fallback": "pixelarticons:tv",
	});
}

export default Component;
