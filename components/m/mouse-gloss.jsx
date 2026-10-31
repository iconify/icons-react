import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx05xj25z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx05xj25z"/>`,
		"fallback": "withicons:mouse-gloss",
	});
}

export default Component;
